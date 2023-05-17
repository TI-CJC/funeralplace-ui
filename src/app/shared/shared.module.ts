import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { SolicitarContatoComponent } from './components/solicitar-contato/solicitar-contato.component';
import { ContatoComponent } from './modais/contato/contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsComponent } from './modais/alerts/alerts.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    SolicitarContatoComponent,
    ContatoComponent,
    AlertsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavMenuComponent,
    FooterComponent,
    SolicitarContatoComponent,
    ContatoComponent,
    AlertsComponent
  ]
})
export class SharedModule { }
