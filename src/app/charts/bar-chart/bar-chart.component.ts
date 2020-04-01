import { Component, OnInit } from '@angular/core';
import { CoursesApiService } from 'src/app/services/courses-api.service';

// const SAMPLE_BARCHART_DATA: any[] = [
//   { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales'},
//   { data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales'}
// ];

// const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  

  constructor(private _coursesApiService : CoursesApiService) { }

  courses: any[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  ngOnInit(): void {
    
    this._coursesApiService.getCourses(1,100)
    .subscribe(res => {
      // console.log(res['page']['data']);
      
      const localChartData = this.getChartData(res);
      this.barChartLabels = localChartData.map(x => x[0]);
      this.barChartData = [{'data': localChartData.map(x => x[1]) , 'label': 'Sections'}]
    });
  }

  getChartData(res : any) {
    this.courses = res['page']['data'];
    const data = this.courses.map(o => [o.name,1]);
    // console.log('data: ', data);

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

  }

}
