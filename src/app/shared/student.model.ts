import {Grade} from './grades.model';

export class Student {
    public id:number;
    public name: string;
    public studentId: string;
    public email: string;
    public grades: Grade[];
    public imagePath: string;

    constructor(id:number, name: string, studentId: string, email: string, grades: Grade[], imagePath: string) {
        this.id = id;
        this.name = name;
        this.studentId = studentId;
        this.email = email;
        this.grades = grades;
        this.imagePath = imagePath;
    }
}