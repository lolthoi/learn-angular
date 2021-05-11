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
}
