import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ClientComponent } from './client/client.component';
import { ContratClientComponent } from './client/contrat-client/contrat-client.component';
import { NouveauClientComponent } from './client/nouveau-client/nouveau-client.component';
import { NouveauContratComponent } from './client/nouveau-contrat/nouveau-contrat.component';
import { ServiceComponent } from './service/service.component';
import { InformationComponent } from './client/contrat-client/information/information.component';
import { ModifClientComponent } from './client/contrat-client/information/modif-client/modif-client.component';
import { ModifContratComponent } from './client/contrat-client/information/modif-contrat/modif-contrat.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientComponent,
    ContratClientComponent,
    NouveauClientComponent,
    NouveauContratComponent,
    ServiceComponent,
    InformationComponent,
    ModifClientComponent,
    ModifContratComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
