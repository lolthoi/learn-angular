import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staffs } from '../Models/Staff';
export const url = 'https://localhost:44304/api/';
var currentdata = 'staffs';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}
  /**GET ALL: select all record */
  getAll(): Observable<Staffs[]> {
    return this.http.get<Staffs[]>(`${url}` + `${currentdata}`).pipe();
  }

  /**GET ONE BY ID: select a record by primary key */
  findId(id: number): Observable<Staffs> {
    return this.http.get<Staffs>(`${url}` + `${currentdata}` + `/${id}`).pipe();
  }

  /** CREATE: add a new record */
  create(staff: Staffs): Observable<Staffs> {
    return this.http.post<Staffs>(`${url}` + `${currentdata}`, staff).pipe();
  }
  /** UPDATE: edit by id */
  update(staff: Staffs): Observable<Staffs> {
    return this.http
      .put<Staffs>(`${url}` + `${currentdata}/${staff.staffId}`, staff)
      .pipe();
  }
  /** DELETE: delete from the server by id */
  delete(id: number): Observable<Staffs> {
    return this.http
      .delete<Staffs>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }
}
