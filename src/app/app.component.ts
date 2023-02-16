import { Component, HostListener } from '@angular/core';
import jump from 'jump.js';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ariaExpanded: boolean = false;
  windowScrolled: boolean = false;

  constructor(private router: Router) {
    
  }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll = ($event: any) => {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (verticalOffset > 50) {
      document.getElementById("mainNav").classList.add('navbar-shrink');
      this.windowScrolled = true;
    } else if (this.windowScrolled && verticalOffset < 10) {
      this.windowScrolled = false;
      document.getElementById("mainNav").classList.remove('navbar-shrink');
    }
  }

  clickMenu = () => {
    this.ariaExpanded = !this.ariaExpanded;
  }

  scrollToTarget = (target: string) => {
    const menuButtonElement = document.getElementById("menu-button");
    menuButtonElement.setAttribute("aria-expanded", "false");
    document.getElementById("navbarSupportedContent").classList.remove('show');
    this.ariaExpanded = false;
    this.router.navigate([target]);
  }

  scrollToTop = () => {
    jump('.landingPage');
  }
  
}
