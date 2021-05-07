import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../Models/Workout';
import { url } from './category.service';
var currentdata = 'workouts';
@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${url}` + `${currentdata}`).pipe();
  }

  /**GET ONE BY ID: select a record by primary key */
  findId(id: number): Observable<Workout> {
    return this.http
      .get<Workout>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }

  /** CREATE: add a new record */
  create(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(`${url}` + `${currentdata}`, workout).pipe();
  }
  /** UPDATE: edit by id */
  update(workout: Workout): Observable<Workout> {
    return this.http
      .put<Workout>(`${url}` + `${currentdata}/${workout.id}`, workout)
      .pipe();
  }
  /** DELETE: delete from the server by id */
  delete(id: number): Observable<Workout> {
    return this.http
      .delete<Workout>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }
}
