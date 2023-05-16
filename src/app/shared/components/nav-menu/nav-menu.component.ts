import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  itensMenu: any[] = [
    {nome:"Home", url: "/"},
    {nome:"Quem somos", url: "quem-somos"},
    {nome:"Contate-nos", url: "contate-nos"},
  ]

  constructor(
    private router: Router
  ){}

  navegate(rota:any){
    this.router.navigate([rota]);
  }
}
