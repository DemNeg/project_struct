import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddSettingComponent } from './add-setting/add-setting.component';
import { DeleteSettingComponent } from './delete-setting/delete-setting.component';
import { EditSettingComponent } from './edit-setting/edit-setting.component';
import { ViewSettingComponent } from './view-setting/view-setting.component';


@NgModule({
  declarations: [
    SettingsComponent,
    AddSettingComponent,
    DeleteSettingComponent,
    EditSettingComponent,
    ViewSettingComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
