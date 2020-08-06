import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
@NgModule({
  declarations: [ManageBlogsComponent, AdminComponent, AdminDashboardComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, FormsModule],
})
export class AdminModule {}
