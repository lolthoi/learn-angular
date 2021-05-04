import { Component, OnInit } from '@angular/core';
import { Staffs } from 'src/app/Models/Staff';
import { Stores } from 'src/app/Models/Store';
import { StaffService } from 'src/app/Services/staff.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  staffs: Staffs[];
  staff = new Staffs();
  stores: Stores[];

  constructor(
    private staffService: StaffService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.staffService.getAll().subscribe((res: any) => {
      this.staffs = res;
    });
    this.storeService.getAll().subscribe((res: any) => {
      this.stores = res;
    });
  }
}
