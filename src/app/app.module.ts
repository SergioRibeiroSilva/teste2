import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoComponent } from './novo/novo.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { FundoPretoDirective } from './shared/fundo-preto.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponent,
    FundoAmareloDirective,
    FundoPretoDirective,
    HighlightMouseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
