import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { DeletePaymentComponent } from './delete-payment/delete-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    AddPaymentComponent,
    DeletePaymentComponent,
    EditPaymentComponent,
    ViewPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
