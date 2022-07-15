import { Component, HostListener } from '@angular/core';
import jump from 'jump.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gavaskar-tex';  
  ariaExpanded: boolean = false;
  windowScrolled: boolean = false;

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll = ($event: any) => {
  //   const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //   if (verticalOffset > 60) {
  //     document.getElementById("mainNav").classList.add('navbar-shrink');
  //     this.windowScrolled = true;
  //   } else if (this.windowScrolled && verticalOffset < 10) {
  //     this.windowScrolled = false;
  //     document.getElementById("mainNav").classList.remove('navbar-shrink');
  //   }
  // }

  // scrollToTarget = (target: string) => {
  //   const menuButtonElement = document.getElementById("menu-button");
  //   menuButtonElement.classList.add('collapsed');
  //   menuButtonElement.setAttribute("aria-expanded", "false");
  //   document.getElementById("navbarMenuContent").classList.remove('show');

  //   let offset = 0;

  //   this.ariaExpanded = false;
  //   jump(target, {
  //     offset: offset
  //   });
  // }

  // jump = (target:string) => {
  //   jump(target)
  // }

}
