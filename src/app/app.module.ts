import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposComponent } from './repos/repos.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './filter.pipe';
import {HttpClientModule } from '@angular/common/http'
import{FormsModule} from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighlightDirective } from './highlight.directive'




@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    SearchComponent,
    NavbarComponent,
    FilterPipe,
    NotFoundComponent,
    HighlightDirective,
    // NgProgressHttpClientModule;

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
