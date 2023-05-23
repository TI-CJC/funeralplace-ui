import { Component, HostListener, Input, OnInit } from '@angular/core';
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
    {nome:"Servicos", url: "servicos"},
    {nome:"Produtos", url: "produtos"},
    {nome:"Quem somos", url: "quem-somos"},
    {nome:"Contate-nos", url: "contate-nos"},
  ]
  @Input() main: any;
  isNavbarVisible = true;
  prevScrollPos = window.pageYOffset;
  scrollDownCount = 0;
  constructor(
    private router: Router
  ){}

  ngOnInit(){
    initTE({ Sidenav });
  }

  navegate(rota:any){
    this.router.navigate([rota]);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /*
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = currentScrollPos < this.prevScrollPos;

    if (isScrollingUp) {
      this.isNavbarVisible = true;
    } else {
      this.isNavbarVisible = false;
    }

    this.prevScrollPos = currentScrollPos;
  }*/

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = currentScrollPos < this.prevScrollPos;

    if (isScrollingUp) {
      this.scrollDownCount = 0;
      this.isNavbarVisible = true;

    } else {
      this.scrollDownCount++;
      if (this.scrollDownCount >= 2) {
        console.log(this.scrollDownCount);
        this.isNavbarVisible = false;

        this.isNavbarVisible = false;
      }
    }

    this.prevScrollPos = currentScrollPos;
  }
}
