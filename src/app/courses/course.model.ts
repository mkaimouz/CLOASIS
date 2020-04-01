import { Student } from '../shared/student.model';

export class Course {
    public name: string;
    public courseCode: string;
    public crn: string;
    public room: string;
    public progress: string;
    public professor: string;
    public students: Student[];

    constructor(name:string, courseCode: string, crn: string, progress:string, room: string, professor:string, students?: Student[]) {
        this.name = name;
        this.courseCode = courseCode;
        this.crn = crn;
        this.progress = progress;
        this.room = room;
        this.professor = professor;
        this.students = students;
    }
    

}