import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueenComponent } from './queen/queen.component';
import { AtajosEmetComponent } from './atajos-emet/atajos-emet.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { FundamentosAngularComponent } from './fundamentos-angular/fundamentos-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    QueenComponent,
    AtajosEmetComponent,
    TypescriptComponent,
    FundamentosAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
