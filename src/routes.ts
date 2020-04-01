import {Routes} from '@angular/router';
import {CoursesComponent} from './app/courses/courses.component';
import {StudentsComponent} from './app/students/students.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import { AddStudentComponent } from './app/students/add-student/add-student.component';

export const appRoutes: Routes = [
    {path: 'courses', component: CoursesComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'add-student', component: AddStudentComponent},
    {path: 'dashboard', component: DashboardComponent},

    {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
]