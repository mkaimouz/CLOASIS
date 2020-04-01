import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor(private _http: HttpClient) { }

  getCourses(pageIndex: number, pageSize: number) {

    return this._http.get('http://localhost:5000/courses/' + pageIndex + '/' + pageSize);
  }

  getCourseByCrn(crn: string) {
    return this._http.get('http://localhost:5000/courses/' + crn);
  }

}
