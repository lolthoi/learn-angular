import { Component, OnInit } from '@angular/core';
import { AddAgeService } from '../Services/add-age.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string = 'Duong';
  age: number = 20;
  constructor(private tuoi: AddAgeService) {
    this.age = tuoi.age;
  }
  public tangTuoi() {
    this.tuoi.age++;
    this.age = this.tuoi.age;
  }

  ngOnInit(): void {}
}
