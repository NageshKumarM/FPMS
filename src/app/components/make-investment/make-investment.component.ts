import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-make-investment',
  templateUrl: './make-investment.component.html',
  styleUrls: ['./make-investment.component.css']
})
export class MakeInvestmentComponent {
  investmentForm: FormGroup;

  constructor(private fb: FormBuilder, private portfolioService:PortfolioService) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      purchasePrice: [0, [Validators.required, Validators.min(0)]],
      purchaseDate: [new Date().toISOString().substring(0, 10), Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.investmentForm.valid) {
      this.portfolioService.addInvestment(this.investmentForm.value).subscribe(() => {
        this.investmentForm.reset();
      });
    }
  }

}
