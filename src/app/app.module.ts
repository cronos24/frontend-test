import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { NodeService } from './pages/grid/nodeservice';

import {TreeTableModule} from 'primeng/treetable';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),        
  },
  // {
  //     path: '',
  //     redirectTo: '/pages/home',
  //     pathMatch: 'full'
  // },
  {
      path: '**',
      redirectTo: '/pages/error' //Error 404 - Page not found
      
  }

];
@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    TreeTableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    MultiSelectModule,
    InputTextModule,
    ContextMenuModule,
    HttpClientModule,
    PagesModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      //useHash: true,
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy'
  }),
  ],
  //providers: [],
  exports:[
    TreeTableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    MultiSelectModule,
    InputTextModule,
    ContextMenuModule,
  ],
  bootstrap: [AppComponent],
  providers: [NodeService]
})
export class AppModule { }
