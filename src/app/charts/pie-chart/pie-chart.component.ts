import { Component, OnInit, Input } from '@angular/core';
import { CoursesApiService } from 'src/app/services/courses-api.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private _coursesApiService : CoursesApiService) { }

  @Input() inputData: any;

  pieChartData: number[];
  pieChartLabels: string[];

  formattedRoomName: string[];


  courses: any[];

  colors: any[] = [
    {
      backgroundColor:[
        '#083d77',
        '#ff6b6b',
        '#f4d35e',
        '#ee964b',
        '#f9573b'],
      borderColor: 'transparent'
    }
  ]

  pieChartType = 'doughnut';

  ngOnInit(): void {
    this._coursesApiService.getCourses(1,100)
    .subscribe(res => {

      const localChartData = this.parseChartData(this.inputData);

    });
  }
  
  parseChartData(res: any) {
    const allData = res;
    console.log(allData);
    this.pieChartData = allData.map(x => x[1]);
    this.pieChartLabels = allData.map(x => x[0]);
  }


}

