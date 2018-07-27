import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GraphqlModule } from './graphql'
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    GraphqlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
