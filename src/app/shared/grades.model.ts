export class Grade {

    public Id: number;
    public grade: number;
    public gradeDescription: string;

    constructor(Id: number, grade: number, gradeDescription: string) {
        this.Id = Id;
        this.grade = grade;
        this.gradeDescription = gradeDescription;
    }
}