import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Subject } from '../models/subject';

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

  save(record: Partial<Subject>) {
    if (record.id) {
      return this.httpClient.put<Subject>(`${this.API}/${record.id}`, record);
    }
    return this.httpClient.post<Subject>(this.API, record);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
