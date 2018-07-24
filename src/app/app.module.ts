import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
