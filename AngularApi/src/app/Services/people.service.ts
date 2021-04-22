import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../Models/people.model';

// const httpType = {
//   headers: new Headers({ 'Content-type': 'Application/json' }),
// };
const urlApi = 'https://localhost:44372/api/';
const currentData = 'people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  /** GET ALL: select all people */
  getAllPeople(): Observable<People[]> {
    return this.http.get<People[]>(`${urlApi}` + `${currentData}`).pipe();
  }
  /** GET ONE: find exactly person by id */
  findPeopleById(id: number): Observable<People> {
    return this.http
      .get<People>(`${urlApi}` + `${currentData}` + `/${id}`)
      .pipe();
  }
  /** CREATE: add a new person */
  createPerson(newPerson: People): Observable<People> {
    return this.http
      .post<People>(`${urlApi}` + `${currentData}`, newPerson)
      .pipe();
  }
  /** UPDATE: edit person by id */
  editPerson(people: People): Observable<People> {
    return this.http
      .put<People>(`${urlApi}` + `${currentData}/${people.id}`, people)
      .pipe();
  }
  /** DELETE: delete person from the server by id */
  deletePerson(id: number): Observable<People> {
    return this.http
      .delete<People>(`${urlApi}` + `${currentData}` + `/${id}`)
      .pipe();
  }
}
