import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassSection } from '../models/class-section.model';
import { ClassSectionCreateRequestDTO, ClassSectionUpdateRequestDTO } from '../models/dtos/class-section.dto';

@Injectable({
  providedIn: 'root'
})
export class ClassSectionService {
  private apiUrl = 'http://localhost:8080/api/class-sections';

  constructor(private http: HttpClient) { }

  getClassSections(): Observable<ClassSection[]> {
    return this.http.get<ClassSection[]>(this.apiUrl);
  }

  getClassSection(id: string): Observable<ClassSection> {
    return this.http.get<ClassSection>(`${this.apiUrl}/${id}`);
  }

  createClassSection(classSection: ClassSectionCreateRequestDTO): Observable<ClassSection> {
    return this.http.post<ClassSection>(this.apiUrl, classSection);
  }

  updateClassSection(id: string, classSection: ClassSectionUpdateRequestDTO): Observable<ClassSection> {
    return this.http.put<ClassSection>(`${this.apiUrl}/${id}`, classSection);
  }

  deleteClassSection(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
