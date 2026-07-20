import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment, EnrollmentResponseDTO } from '../models/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:8080/api/enrollments';

  constructor(private http: HttpClient) { }

  requestEnrollment(studentId: string, classSectionId: string): Observable<EnrollmentResponseDTO> {
    const params = new HttpParams()
      .set('studentId', studentId)
      .set('classSectionId', classSectionId);
    return this.http.post<EnrollmentResponseDTO>(`${this.apiUrl}/request`, null, { params });
  }

  confirmEnrollment(id: string): Observable<Enrollment> {
    return this.http.put<Enrollment>(`${this.apiUrl}/${id}/confirm`, null);
  }

  deleteEnrollment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  cancelEnrollmentStatus(id: string): Observable<Enrollment> {
    return this.http.put<Enrollment>(`${this.apiUrl}/${id}/cancel`, null);
  }

  getEnrollmentsByStudent(studentId: string): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/student/${studentId}`);
  }

  getEnrollmentsByClassSection(classSectionId: string): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/class-section/${classSectionId}`);
  }

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.apiUrl);
  }

  getEnrollmentById(id: string): Observable<Enrollment> {
    return this.http.get<Enrollment>(`${this.apiUrl}/${id}`);
  }

  updateEnrollment(id: string, enrollment: { studentId: string; classSectionId: string }): Observable<Enrollment> {
    return this.http.put<Enrollment>(`${this.apiUrl}/${id}`, enrollment);
  }
}
