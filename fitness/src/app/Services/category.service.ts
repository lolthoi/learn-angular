import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/Category';
export const url = 'https://localhost:44343/api/';
var currentdata = 'categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${url}` + `${currentdata}`).pipe();
  }

  /**GET ONE BY ID: select a record by primary key */
  findId(id: number): Observable<Category> {
    return this.http
      .get<Category>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }

  /** CREATE: add a new record */
  create(category: Category): Observable<Category> {
    return this.http
      .post<Category>(`${url}` + `${currentdata}`, category)
      .pipe();
  }
  /** UPDATE: edit by id */
  update(category: Category): Observable<Category> {
    return this.http
      .put<Category>(`${url}` + `${currentdata}/${category.id}`, category)
      .pipe();
  }
  /** DELETE: delete from the server by id */
  delete(id: number): Observable<Category> {
    return this.http
      .delete<Category>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }
}
