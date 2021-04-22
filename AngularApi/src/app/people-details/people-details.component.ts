import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../Models/people.model';
import { PeopleService } from '../Services/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css'],
})
export class PeopleDetailsComponent implements OnInit {
  people = new People();

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }

  getRoute(id: any) {
    this.peopleService.findPeopleById(id).subscribe((res: any) => {
      this.people = res;
    });
  }
}
