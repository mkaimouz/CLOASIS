import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../course.model';
import { Student } from 'src/app/shared/student.model';
import {CoursesApiService} from '../../services/courses-api.service'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

    @Output() courseSelected = new EventEmitter<Course>();
  constructor(private _courseData:CoursesApiService) { }

  courses: Course[];
  total = 0;
  page = 1;
  limit = 3;
  loading = false;

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this._courseData.getCourses(this.page, this.limit)
    .subscribe(res => {
      console.log('Result from getCourses: ', res);
      this.courses = res['page']['data'];
      this.total = res['page'].total;
      this.loading = false;
    })
  }

  onSelected(course : Course) {
    this.courseSelected.emit(course);
  }

  goToPrevious(): void {
    this.page--;
    this.getCourses();
  }

  goToNext(): void {
    this.page++;
    this.getCourses();
  }

  goToPage(n : number) {
    this.page = n;
    this.getCourses();
  }

}
