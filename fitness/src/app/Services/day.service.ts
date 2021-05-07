import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Day } from '../Models/Day';
import { url } from './category.service';
var currentdata = 'days';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Day[]> {
    return this.http.get<Day[]>(`${url}` + `${currentdata}`).pipe();
  }

  // /**GET ONE BY ID: select a record by primary key */
  // findId(id: number): Observable<Day> {
  //   return this.http.get<Day>(`${url}` + `${currentdata}` + `/${id}`).pipe();
  // }

  // /** CREATE: add a new record */
  // create(day: Day): Observable<Day> {
  //   return this.http.post<Day>(`${url}` + `${currentdata}`, day).pipe();
  // }
  // /** UPDATE: edit by id */
  // update(day: Day): Observable<Day> {
  //   return this.http
  //     .put<Day>(`${url}` + `${currentdata}/${day.id}`, day)
  //     .pipe();
  // }
  // /** DELETE: delete from the server by id */
  // delete(id: number): Observable<Day> {
  //   return this.http.delete<Day>(`${url}` + `${currentdata}` + `/${id}`).pipe();
  // }
}
