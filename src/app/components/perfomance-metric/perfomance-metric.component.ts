import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-perfomance-metric',
  templateUrl: './perfomance-metric.component.html',
  styleUrls: ['./perfomance-metric.component.css']
})
export class PerfomanceMetricComponent {

  performanceMetrics: { date: string, profitLoss: number }[] = [];
  chart: any;

  constructor(private investmentService: PortfolioService) {}

  ngOnInit(): void {
    this.loadPerformanceMetrics();
  }

  loadPerformanceMetrics() {
    this.investmentService.getAllInvestments().subscribe(investments => {
      this.performanceMetrics = this.investmentService.calculateDailyPerformance(investments);
      this.renderChart();
    });
  }

  

  renderChart(){
    const labels = this.performanceMetrics.map(metric => metric.date);
    const data = this.performanceMetrics.map(metric => metric.profitLoss);

    if (this.chart) {
      this.chart.destroy(); 
    }

    this.chart = new Chart('performanceChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Profit/Loss',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
            }
          }
        }
      }
    });
  }
   
    
  }


