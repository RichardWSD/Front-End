import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule } from '@angular/forms';
import { MultiplePipe } from './pipe/multiple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //想用ngModel指令要引入这个模块
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
