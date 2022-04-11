import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutomersRoutingModule } from './cutomers-routing.module';
import { CutomersComponent } from './cutomers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';


@NgModule({
  declarations: [
    CutomersComponent,
    ViewCustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    CommonModule,
    CutomersRoutingModule
  ]
})
export class CutomersModule { }
