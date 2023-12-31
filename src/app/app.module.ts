import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ZooComponent } from './zoo/zoo.component';
import { ZooState } from './store/animal.state';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([ZooState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
