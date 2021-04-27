import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClientComponent} from './client/client.component';
import {ContratClientComponent} from './client/contrat-client/contrat-client.component';
import {InformationComponent} from './client/contrat-client/information/information.component';
import {ModifierComponent} from './client/contrat-client/information/modifier-info-client/modifier.component';
import {ModifierInfoCotratComponent} from './client/contrat-client/information/modifier-info-cotrat/modifier-info-cotrat.component';
import {NewClientComponent} from './client/new-client/new-client.component';
import {NewContratComponent} from './client/new-contrat/new-contrat.component';
import {InfoClientComponent} from './client/new-contrat/info-client/info-client.component';
import {ContratComponent} from './client/new-contrat/info-client/contrat/contrat.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
import { ModifierInfoBancaireComponent } from './client/contrat-client/information/modifier-info-bancaire/modifier-info-bancaire.component';

@NgModule({
    declarations: [
      AppComponent,
      ClientComponent,
      ContratClientComponent,
      InformationComponent,
      ModifierComponent,
      ModifierInfoCotratComponent,
      NewClientComponent,
      NewContratComponent,
      InfoClientComponent,
      ContratComponent,
      MenuComponent,
      Menu2Component,
      ModifierInfoBancaireComponent
    ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
