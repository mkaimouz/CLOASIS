import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { StudentsApiService } from 'src/app/services/students-api.service';
import { Student } from '../../shared/student.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-page',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student;
  addForm: FormGroup;

  studentApiService: StudentsApiService;

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onSubmit(){
    if(this.addForm.valid){
      this.student = new Student(1414,this.addForm.get("name").value,this.addForm.get("id").value,this.addForm.get("email").value,null, "bla");
      console.log(this.student);
      this.studentApiService.addStudent(this.student);
      // this.router.navigate(['/students']);
    }
  }

  constructor(private route: ActivatedRoute,private courseService: StudentsApiService,private router:Router) { }

  ngOnInit() {

      this.addForm = new FormGroup({
        'name' : new FormControl('Enter Your Full Name',[Validators.required]),
        'id' : new FormControl(null,[Validators.required]),
        'email' : new FormControl('xyz@mail.aub.edu',[Validators.required,Validators.email])
      });
  }

}
