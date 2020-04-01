import { Component, OnInit } from '@angular/core';
import {Student} from 'src/app/shared/student.model'
import {StudentsApiService} from '../../services/students-api.service'


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private _studentData:StudentsApiService) { }

  students: Student[];
  total = 0;
  page = 1;
  limit = 13;
  loading = false;

  ngOnInit(): void {
    this.getStudents();
    // console.log(this.students);
  }

  getStudents(): void {
    this._studentData.getStudents(this.page, this.limit)
    .subscribe(res => {
      console.log('Result from getStudents: ', res);
      this.students = res['page']['data'];
      this.total = res['page'].total;
      this.loading = false;
    })
  }

    goToPrevious(): void {
      this.page--;
      this.getStudents();
    }
  
    goToNext(): void {
      this.page++;
      this.getStudents();
    }
  
    goToPage(n : number) {
      this.page = n;
      this.getStudents();
    }

}
