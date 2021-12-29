import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './pages/grid/grid.component';
import { PagesModule } from './pages/pages.module';

const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),        
  },
  {
      path: '',
      redirectTo: '/pages/home',
      pathMatch: 'full'
  },
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
    HttpClientModule,
    PagesModule,
    RouterModule.forRoot(appRoutes, {
      //useHash: true,
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy'
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
