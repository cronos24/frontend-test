import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HomeService } from './home.service';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    GridComponent,
    HomeComponent
  ],
  providers: [HomeService],
})
export class PagesModule { }
