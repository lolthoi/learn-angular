import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://localhost:44304/api/staffs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}

  /**GET ALL: select all record */
  getType(): Observable<staff[]> {
    return this.http
      .get(name)
      .map((res: Response) => <IType[]>res.json())
      .catch(this.handleError);
  }

  addType(name: string): Observable<IType> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.url, body, options)
      .map(this.handleResponse)
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
