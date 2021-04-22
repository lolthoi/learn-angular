import { Component, OnInit } from '@angular/core';
import { People } from '../Models/people.model';
import { PeopleService } from '../Services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people: People[];
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getAllPeople().subscribe((res: any) => {
      this.people = res;
    });
  }
  onDelete(personId: number): void {
    var answer = window.confirm('Delete data?');
    if (answer) {
      this.peopleService.deletePerson(personId).subscribe((res: any) => {
        this.people = this.people.filter((person) => person.id !== personId);
      });
    } else {
    }
  }
}
