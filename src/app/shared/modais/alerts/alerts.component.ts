import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
  mostrarModal= true
  @ViewChild('exampleModal') modalElement!: ElementRef;
  ngOnInit(){
  }
}
