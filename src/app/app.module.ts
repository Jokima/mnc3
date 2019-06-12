import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { NewtongService } from './services/newtong/newtong.service';
import { TabelaComponent } from './tabela/tabela.component';
import { AjusteService } from './services/ajuste/ajuste.service';

@NgModule({
  declarations: [AppComponent, MainComponent, TabelaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NewtongService, AjusteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
