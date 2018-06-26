import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CustomerDashboardComponent
  ],
  declarations: [CustomerDashboardComponent]
})
export class CustomerDashboardModule { }
