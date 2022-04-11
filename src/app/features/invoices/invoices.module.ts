import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { DeleteInvoiceComponent } from './delete-invoice/delete-invoice.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    AddInvoiceComponent,
    ViewInvoiceComponent,
    EditInvoiceComponent,
    DeleteInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
