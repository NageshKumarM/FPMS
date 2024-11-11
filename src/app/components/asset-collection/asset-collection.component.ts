import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-asset-collection',
  templateUrl: './asset-collection.component.html',
  styleUrls: ['./asset-collection.component.css']
})
export class AssetCollectionComponent {
  assetCollection: { [key: string]: number } = {};

  labelData:string[]=[];
  mainData:number[]=[];

  constructor(private investmentService:PortfolioService) {}

  ngOnInit(): void {
    this.loadAssetCollection();

  }

  loadAssetCollection() {
    this.investmentService.getAssetCollection().subscribe(assetCollection => {
      this.assetCollection = assetCollection;  
      console.log(assetCollection);
      
      if (this.assetCollection != null) {
        this.labelData = [];
        this.mainData = [];

        for (const key in this.assetCollection) {
          if (this.assetCollection.hasOwnProperty(key)) {
            this.labelData.push(key); 
            this.mainData.push(this.assetCollection[key]); 
          }
        }
        this.RenderChart(this.labelData,this.mainData,'doughnut','piechart')
      }
    });
  }


  RenderChart(labeldata:any,realdata:any,type:any,id:any){


    new Chart(id, {
      type: 'doughnut',
      data: {
        labels: labeldata,
        datasets: [{
          label: 'quantity',
          data: realdata,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


  }

}
