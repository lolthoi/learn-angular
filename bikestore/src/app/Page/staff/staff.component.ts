import { Component, OnInit } from '@angular/core';
import { Staffs } from 'src/app/Models/Staff';
import { Stores } from 'src/app/Models/Store';
import { StaffService } from 'src/app/Services/staff.service';
import { StoreService } from 'src/app/Services/store.service';

var nhanvien: Staffs[];

const sendRequest = function (value) {
  let flag: Boolean;
  for (let index = 0; index < nhanvien.length; index++) {
    if (value == nhanvien[index].email) {
      flag == true;
      break;
    }
  }
  if (flag == true) {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(value);
      }, 1000);
    });
  }
};

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  staffs: Staffs[];
  staff = new Staffs();
  stores: Stores[];
  namePattern: any = /^[^0-9]+$/;
  phonePattern: any = /^\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
  phoneRules: any = {
    X: /[02-9]/,
  };

  constructor(
    private staffService: StaffService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.staffService.getAll().subscribe((res: any) => {
      this.staffs = res;
      nhanvien = res;
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
      email: e.data.email,
      phone: e.data.phone,
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

  asyncValidation(params) {
    return sendRequest(params.value);
  }
}
