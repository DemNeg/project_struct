import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteLoanComponent } from './delete-loan/delete-loan.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';


@NgModule({
  declarations: [
    LoansComponent,
    DeleteLoanComponent,
    AddLoanComponent,
    EditLoanComponent,
    ViewLoanComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
