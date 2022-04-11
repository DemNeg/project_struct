import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandlerService } from './services/error-handler.service';

/*
 This module is shared accross all modules
*/

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [CommonModule,BrowserModule],
  providers: [ErrorHandlerService]
})
export class SharedModule { }
