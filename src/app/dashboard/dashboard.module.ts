import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeviewComponent } from './homeview/homeview.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [HomeviewComponent],
  imports: [CommonModule, DashboardRoutingModule, AgGridModule],
  exports: [HomeviewComponent],
})
export class DashboardModule {}
