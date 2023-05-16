import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { SolicitarContatoComponent } from './components/solicitar-contato/solicitar-contato.component';
import { ContatoComponent } from './modais/contato/contato.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    SolicitarContatoComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    NavMenuComponent,
    FooterComponent,
    SolicitarContatoComponent,
    ContatoComponent
  ]
})
export class SharedModule { }
