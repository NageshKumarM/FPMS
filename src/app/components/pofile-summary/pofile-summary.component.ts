import { Component } from '@angular/core';
import { Investment } from 'src/app/models/investment';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-pofile-summary',
  templateUrl: './pofile-summary.component.html',
  styleUrls: ['./pofile-summary.component.css']
})
export class PofileSummaryComponent {

  totalInvestment:number=0;
  profitLoss:number=0;
  profitLossPercentage:number=0;
  investments:Investment[]=[];

  constructor(private _portfolioService:PortfolioService){}

  ngOnInit():void{
    this._portfolioService.getAllInvestments().subscribe(
      (data:any)=>{
        this.investments=data;
        this.calculateSummary();
      }
    )

  }


  calculateSummary():void{
    this.totalInvestment = this.calculateTotalInvestment();
    this.profitLoss = this.calculateProfitLoss();
    this.profitLossPercentage = this.calculateProfitLossPercentage();
  }
  private calculateTotalInvestment(): number {
    return this.investments.reduce((total, investment) => {
      return total + (investment.purchasePrice * investment.quantity);
    }, 0);
  }

  private calculateProfitLoss(): number {
    return this.investments.reduce((total, investment) => {
      const profitLoss = (investment.currentValue - investment.purchasePrice) * investment.quantity;
      return total + profitLoss;
    }, 0);
  }

  private calculateProfitLossPercentage(): number {
    const totalPurchasePrice = this.calculateTotalInvestment(); 
    if (totalPurchasePrice === 0) return 0; 
    return (this.profitLoss / totalPurchasePrice) * 100;
  }

    
  }


