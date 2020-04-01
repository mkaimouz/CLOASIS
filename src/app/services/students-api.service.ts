import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Student } from '../shared/student.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Accept' : 'q=0.8;application/json;q=0.9'
  })
};
@Injectable({
  providedIn: 'root'
})
export class StudentsApiService {


  headers: HttpHeaders;

  constructor(private _http: HttpClient) {}

    


  getStudents(pageIndex: number, pageSize: number) {

    return this._http.get('http://localhost:5000/students/' + pageIndex + '/' + pageSize);
  }

  getStudentById(id: number) {
    return this._http.get('http://localhost:5000/students/' + id);
  }

  addStudent(student: Student): Observable<Student> {
    return this._http.post<Student>('http://localhost:5000/students', student, httpOptions);
  }

}
