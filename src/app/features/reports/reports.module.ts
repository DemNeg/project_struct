import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddReportComponent } from './add-report/add-report.component';
import { DeleteReportComponent } from './delete-report/delete-report.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { EditReportComponent } from './edit-report/edit-report.component';


@NgModule({
  declarations: [
    ReportsComponent,
    AddReportComponent,
    DeleteReportComponent,
    ViewReportComponent,
    EditReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
