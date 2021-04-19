import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  name: string = '';
  evenStyle = { color: 'red', fontSize: '50px' };
  oddStyle = { color: 'black', fontSize: '50px' };

  constructor() {}

  ngOnInit(): void {}

  InputName(event) {
    this.name = event.target.value;
  }
}
