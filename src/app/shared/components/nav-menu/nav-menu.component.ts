import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Sidenav,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  itensMenu: any[] = [
    {nome:"Home", url: "/"},
    {nome:"Quem somos", url: "quem-somos"},
    {nome:"Contate-nos", url: "contate-nos"},
  ]
  @Input() main: any;

  constructor(
    private router: Router
  ){}

  ngOnInit(){
    initTE({ Sidenav });
  }

  navegate(rota:any){
    this.router.navigate([rota]);
  }

  public scrollToElement(element:any): void {

    element.scrollIntoView({

      behavior: "smooth",

      block: "start",

      inline: "nearest"

    });

  }
}
