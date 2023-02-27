import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlTagsComponent } from './html-tags/html-tags.component';
import { CssComponent } from './css/css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlTagsComponent,
    CssComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
