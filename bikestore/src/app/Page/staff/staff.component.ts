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
  onCreate(e: any) {
    this.staff = {
      staffId: this.staff.staffId,
      firstName: e.data.firstName,
      lastName: e.data.lastName,
      storeId: e.data.storeId,
      active: e.data.active,
      email: '',
      phone: '',
      managerId: null,
      manager: null,
      inverseManager: null,
      orders: [],
    };
    this.staffService.create(this.staff).subscribe(() => {
      this.staffs;
    });
  }

  onUpdate(e: any) {
    debugger;
    this.staff = {
      staffId: e.key,
      firstName: e.data.firstName,
      lastName: e.data.lastName,
      storeId: e.data.storeId,
      active: e.data.active,
      email: e.data.email,
      phone: e.data.phone,
      managerId: null,
      manager: null,
      inverseManager: null,
      orders: [],
    };
    this.staffService.update(this.staff).subscribe(() => {
      this.staffs;
    });
  }
}
