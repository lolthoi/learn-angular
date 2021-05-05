import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stores } from '../Models/Store';
import { url } from './staff.service';
var currentdata = 'stores'
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Stores[]> {
    return this.http.get<Stores[]>(`${url}` + `${currentdata}`).pipe();
  }

  /**GET ONE BY ID: select a record by primary key */
  findId(id: number): Observable<Stores> {
    return this.http.get<Stores>(`${url}` + `${currentdata}` + `/${id}`).pipe();
  }

  /** CREATE: add a new record */
  create(store: Stores): Observable<Stores> {
    return this.http.post<Stores>(`${url}` + `${currentdata}`, store).pipe();
  }
  /** UPDATE: edit by id */
  update(store: Stores): Observable<Stores> {
    return this.http
      .put<Stores>(`${url}` + `${currentdata}/${store.storeId}`, store)
      .pipe();
  }
  /** DELETE: delete from the server by id */
  delete(id: number): Observable<Stores> {
    return this.http
      .delete<Stores>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }
}
