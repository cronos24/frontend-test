import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HomeService } from './home.service';
import { GridComponent } from './grid/grid.component';

import {TreeTableModule} from 'primeng/treetable';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
import { FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';


@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TreeTableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    MultiSelectModule,
    InputTextModule,
    ContextMenuModule,
    FormsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DropdownModule,
    ProgressBarModule
  ],
  exports:[
    GridComponent,
    HomeComponent
  ],
  providers: [HomeService],
})
export class PagesModule { }
