import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../Models/people.model';
import { PeopleService } from '../Services/people.service';

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  styleUrls: ['./people-create.component.css'],
})
export class PeopleCreateComponent implements OnInit {
  person = new People();
  pId: number;
  name: string = '';
  pName(event) {
    this.name = event.target.value;
  }
  phone: string = '';
  pPhone(event) {
    this.phone = event.target.value;
  }
  location: string = '';
  pLocation(event) {
    this.location = event.target.value;
  }
  occupation: string = '';
  pOccupation(event) {
    this.occupation = event.target.value;
  }
  message: string = 'thêm mới người thành công';
  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.person = {
      id: this.pId,
      name: this.name,
      phone: this.phone,
      location: this.location,
      occupation: this.occupation,
    };
    this.peopleService.createPerson(this.person).subscribe((res: any) => {
      alert(this.message);
    });
    this.router.navigate(['people']);
  }
}
