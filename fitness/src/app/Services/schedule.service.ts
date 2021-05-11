import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../Models/Schedule';
import { Status } from '../Models/Status';
import { url } from './category.service';
var currentdata = 'schedules';

var statuses: Status[] = [
  {
    id: 1,
    name: 'workout day',
  },
  {
    id: 0,
    name: 'rest day',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  getStatuts() {
    return statuses;
  }

  getAll(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${url}` + `${currentdata}`).pipe();
  }

  /**GET ONE BY ID: select a record by primary key */
  findId(id: number): Observable<Schedule> {
    return this.http
      .get<Schedule>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }

  /** CREATE: add a new record */
  create(schedule: Schedule): Observable<Schedule> {
    return this.http
      .post<Schedule>(`${url}` + `${currentdata}`, schedule)
      .pipe();
  }
  /** UPDATE: edit by id */
  update(schedule: Schedule): Observable<Schedule> {
    return this.http
      .put<Schedule>(`${url}` + `${currentdata}/${schedule.id}`, schedule)
      .pipe();
  }
  /** DELETE: delete from the server by id */
  delete(id: number): Observable<Schedule> {
    return this.http
      .delete<Schedule>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }
}
