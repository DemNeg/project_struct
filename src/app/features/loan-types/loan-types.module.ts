import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanTypesRoutingModule } from './loan-types-routing.module';
import { LoanTypesComponent } from './loan-types.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddLoanTypeComponent } from './add-loan-type/add-loan-type.component';
import { ViewLoanTypeComponent } from './view-loan-type/view-loan-type.component';
import { EditLoanTypeComponent } from './edit-loan-type/edit-loan-type.component';
import { DeleteLoanTypeComponent } from './delete-loan-type/delete-loan-type.component';


@NgModule({
  declarations: [
    LoanTypesComponent,
    AddLoanTypeComponent,
    ViewLoanTypeComponent,
    EditLoanTypeComponent,
    DeleteLoanTypeComponent
  ],
  imports: [
    CommonModule,
    LoanTypesRoutingModule
  ]
})
export class LoanTypesModule { }
