import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Chart, BarController, BarElement, CategoryScale, LinearScale
} from 'chart.js';
import { SharedService } from 'src/app/services/shared.service';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

@Component({
  selector: 'app-acceuilcomponents',
  templateUrl: './acceuilcomponents.component.html',
  styleUrls: ['./acceuilcomponents.component.css']
})
export class AcceuilcomponentsComponent implements OnInit, AfterViewInit, OnDestroy {
  // Variables for the first chart (e.g., Publication Count by Business)
  public publicationChartData: number[] = [];
  public publicationChartLabels: string[] = [];
  private publicationChartInstance: Chart | null = null;

  // Variables for the second chart (e.g., Average Orders by Business)
  public orderChartData: number[] = [];
  public orderChartLabels: string[] = [];
  private orderChartInstance: Chart | null = null;

  allorders: any;
  allbuisiness: any;
  allorganisation: any;
  allpublication: any;
organisationList:any ;
buisinessllist:any;
  constructor(private sharedservice: SharedService, private http: HttpClient) {}

  ngOnInit() {
    this.getallorders();
    this.getallpublication();
    this.getallorganisation();
    this.getallbuisiness();
    this.FindAllOranasation();
    this.findallbuisiness();
  }

  ngAfterViewInit() {
    this.loadPublicationChart();
    this.loadOrderChart(); // Load the second chart
  }

  ngOnDestroy() {
    this.destroyPublicationChart();
    this.destroyOrderChart(); // Destroy the second chart
  }

  getallorders() {
    this.sharedservice.allorders().subscribe((res) => {
      this.allorders = res;
    });
  }

  getallpublication() {
    this.sharedservice.allpublication().subscribe((data) => {
      this.allpublication = data;
    });
  }

  getallorganisation() {
    this.sharedservice.allorganisation().subscribe((data) => {
      this.allorganisation = data;
    });
  }

  getallbuisiness() {
    this.sharedservice.allbuisiness().subscribe((data) => {
      this.allbuisiness = data;
    });
  }

  loadPublicationChart() {
    this.http.get<any[]>('http://localhost:8081/business/publications-count').subscribe(data => {
      if (data && data.length > 0) {
        this.publicationChartLabels = data.map(item => item.entrepriseName);
        this.publicationChartData = data.map(item => item.publicationCount);
        this.renderPublicationChart();
      } else {
        console.warn("No data received for publication chart");
      }
    });
  }

  loadOrderChart() {
    this.http.get<any[]>('http://localhost:8081/commande/average-purchase-by-organisation').subscribe(data => {
      if (data && data.length > 0) {
        this.orderChartLabels = data.map(item => item.organisationName);
        this.orderChartData = data.map(item => item.moyenneAchats);
        this.renderOrderChart();
      } else {
        console.warn("No data received for order chart");
      }
    });
  }

  renderPublicationChart() {
    this.destroyPublicationChart();

    const canvas = document.getElementById('publicationChart') as HTMLCanvasElement;
    if (canvas && canvas.getContext) {
      this.publicationChartInstance = new Chart(canvas.getContext('2d')!, {
        type: 'bar',
        data: {
          labels: this.publicationChartLabels,
          datasets: [
            {
              label: 'Total de publications',
              data: this.publicationChartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
                callback: function(value) { return Number(value).toFixed(0); }
              },
              title: {
                display: true,
                text: 'Publication Count'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Business'
              }
            }
          }
        }
      });
    } else {
      console.error("Canvas element 'publicationChart' not found or context not available.");
    }
  }

  renderOrderChart() {
    this.destroyOrderChart();

    const canvas = document.getElementById('orderChart') as HTMLCanvasElement;
    if (canvas && canvas.getContext) {
      this.orderChartInstance = new Chart(canvas.getContext('2d')!, {
        type: 'bar',
        data: {
          labels: this.orderChartLabels,
          datasets: [
            {
              label: 'Average Orders',
              data: this.orderChartData,
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Average Orders'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Business'
              }
            }
          }
        }
      });
    } else {
      console.error("Canvas element 'orderChart' not found or context not available.");
    }
  }
  private destroyPublicationChart() {
    if (this.publicationChartInstance) {
      this.publicationChartInstance.destroy();
      this.publicationChartInstance = null;
    }
  }

  // Destroy the second chart instance if it exists
  private destroyOrderChart() {
    if (this.orderChartInstance) {
      this.orderChartInstance.destroy();
      this.orderChartInstance = null;
    }
  }

  FindAllOranasation(){
    this.sharedservice.GetallOrganisation().subscribe((data)=>{
      this.organisationList=data;
      console.log(data);
    })
  }
  findallbuisiness(){
    this.sharedservice.getallBsuisiness().subscribe((data)=>{
      this.buisinessllist= data ;
    })
  }
}
