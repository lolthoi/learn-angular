import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../Models/people.model';
import { PeopleService } from '../Services/people.service';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css'],
})
export class PeopleEditComponent implements OnInit {
  person = new People();

  id: number;
  name: string;
  cName(event) {
    this.name = event.target.value;
  }
  phone: string;
  cPhone(event) {
    this.phone = event.target.value;
  }
  location: string;
  cLocation(event) {
    this.location = event.target.value;
  }
  occupation: string;
  cOccupation(event) {
    this.occupation = event.target.value;
  }
  message: string = 'thay đổi thông tin người thành công';
  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private redirectRoute: Router
  ) {}

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }

  getRoute(id: any) {
    this.peopleService.findPeopleById(id).subscribe((res: any) => {
      this.person = res;
      this.id = this.person.id;
      this.name = this.person.name;
      this.phone = this.person.phone;
      this.location = this.person.location;
      this.occupation = this.person.occupation;
    });
  }

  onSubmit(): void {
    this.person = {
      id: this.id,
      name: this.name,
      phone: this.phone,
      location: this.location,
      occupation: this.occupation,
    };
    console.log(this.person);
    this.peopleService.editPerson(this.person).subscribe(() => {
      alert(this.message);
    });
    this.redirectRoute.navigate(['people']);
  }
}
