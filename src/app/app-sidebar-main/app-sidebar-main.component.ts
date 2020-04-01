import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../courses/course.model';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './app-sidebar-main.component.html',
  styleUrls: ['./app-sidebar-main.component.css']
})
export class AppSidebarMainComponent implements OnInit {

  isSelected:boolean;

  constructor() { 
  }

  ngOnInit(): void {
    this.isSelected = false;
  }

  changeSelectedState(): void {
    this.isSelected = !this.isSelected;
  }

}
