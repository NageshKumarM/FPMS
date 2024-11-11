import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investment } from '../models/investment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private _httpClient:HttpClient) {}

  getAllInvestments(): Observable<Investment[]> {
    return this._httpClient.get<Investment[]>("http://localhost:3000/investments").pipe(
      map((investments: Investment[]) => {
        return investments.map(investment => ({
          ...investment,
          purchaseDate: new Date(investment.purchaseDate), // Convert purchaseDate to Date
          currentValue: this.getCurrentValue(investment) 
        }));
      })
    );
  }

  private getCurrentValue(investment: Investment): number {
    return investment.purchasePrice * (1 + Math.random() * 0.1);
  }
  getAssetCollection(): Observable<{ [key: string]: number }> {
    return this.getAllInvestments().pipe(
      map(investments => {
        const assetCollection: { [key: string]: number } = {};
        
        investments.forEach(investment => {
          if (assetCollection[investment.assetType]) {
            assetCollection[investment.assetType] += investment.quantity;
          } else {
            assetCollection[investment.assetType] = investment.quantity;
          }
        });

        return assetCollection;
      })
    );
  }

  calculateDailyPerformance(investments: Investment[]): { date: string, profitLoss: number }[] {
    const performanceMetrics: { date: string, profitLoss: number }[] = [];
  
    investments.forEach(investment => {
      const profitLoss = (investment.currentValue - investment.purchasePrice) * investment.quantity;
      const date = investment.purchaseDate.toISOString().split('T')[0]; // Now this should work
  
      const existingMetric = performanceMetrics.find(metric => metric.date === date);
      
      if (existingMetric) {
        existingMetric.profitLoss += profitLoss; 
      } else {
        performanceMetrics.push({
          date: date,
          profitLoss: profitLoss
        });
      }
    });
  
    return performanceMetrics.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  addInvestment(investment: Investment): Observable<Investment> {
    return this._httpClient.post<Investment>("http://localhost:3000/investments", investment);
  }
}
  
