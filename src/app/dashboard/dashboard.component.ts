import { Component, OnInit } from '@angular/core';
import { CoursesApiService } from '../services/courses-api.service';
import { StudentsApiService } from '../services/students-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  roomBusiness:any;
  studentsPerClass:any;

  studentsPerCourseArray: Object[];

  courses: any[];
  coursesCRNs : string[];

  formattedRoomName: string[];

  constructor(private _coursesApiService: CoursesApiService) { }

  ngOnInit(): void {

    this._coursesApiService.getCourses(1,100).subscribe (res => {
      this.roomBusiness = this.getRoomBusiness(res);
    })

    // this._coursesApiService.getCourses(1,100).subscribe (res => {

    //   this.studentsPerClass = this.getStudentsPerClass(res);
    // })

  }

  // getStudentsPerClass(res: any) {
  //   this.courses = res['page']['data'];
  //   this.coursesCRNs = this.courses.map(o => o.crn);
  //   // this._coursesApiService.getCourseByCrn('22011').subscribe(res => console.log(res));
  //   this.getStudentsInClass('22011');



  //   console.log(this.studentsPerCourseArray);
  // }

  // // getStudentsInClass(crn:string) {
  // //   this._coursesApiService.getCourseByCrn(crn).subscribe(
  // //     res => this.studentsPerCourseArray.push(res)
  // //   );
  // // }

  getRoomBusiness(res : any) {
    this.courses = res['page']['data'];
    const data = this.courses.map(o => {
      this.formattedRoomName = o.room.split(" ");
      if (this.formattedRoomName.length > 2) {
        return [this.formattedRoomName[0] + " " + this.formattedRoomName[1], 1]
      } else {
        return [this.formattedRoomName[0], 1];
      }
    });
    // console.log(data);

    const p: any[] =  [];

    const chartData = data.reduce((r, e) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    return chartData;
    // console.log(chartData);

  }

}
