import { CssComponent } from './css/css.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlTagsComponent } from './html-tags/html-tags.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bootstrap',
    pathMatch: 'full'
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent
  },
  {
    path: 'html',
    component: HtmlTagsComponent
  },
  {
    path: 'css',
    component: CssComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
