import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../Models/Exercise';
import { url } from './category.service';
var currentdata = 'exercises';
@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${url}` + `${currentdata}`).pipe();
  }

  /**GET ONE BY ID: select a record by primary key */
  findId(id: number): Observable<Exercise> {
    return this.http
      .get<Exercise>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }

  /** CREATE: add a new record */
  create(exercise: Exercise): Observable<Exercise> {
    return this.http
      .post<Exercise>(`${url}` + `${currentdata}`, exercise)
      .pipe();
  }
  /** UPDATE: edit by id */
  update(exercise: Exercise): Observable<Exercise> {
    return this.http
      .put<Exercise>(`${url}` + `${currentdata}/${exercise.id}`, exercise)
      .pipe();
  }
  /** DELETE: delete from the server by id */
  delete(id: number): Observable<Exercise> {
    return this.http
      .delete<Exercise>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }
}
