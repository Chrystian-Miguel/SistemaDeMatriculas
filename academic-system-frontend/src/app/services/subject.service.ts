import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Subject } from '../models/subject';
import { SUPPRESS_GLOBAL_ERROR_HANDLER } from '../interceptors/interceptor.context';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private readonly API = 'http://localhost:8080/api/subjects';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.API);
  }

  getSubjects(): Observable<Subject[]> {
    return this.list();
  }

  save(record: Partial<Subject>): Observable<Subject> {
    if (record.id) {
      return this.httpClient.put<Subject>(`${this.API}/${record.id}`, record);
    }
    return this.httpClient.post<Subject>(this.API, record);
  }

  remove(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.API}/${id}`, {
      context: new HttpContext().set(SUPPRESS_GLOBAL_ERROR_HANDLER, true)
    });
  }
}
