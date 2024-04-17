import {Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  showSideBar: boolean = false

  @ViewChild('header') header!:ElementRef;
  @ViewChild('navigationHeader') navigationHeader!:ElementRef;
  @ViewChild('bg') bg!:ElementRef;
  @ViewChild('arrow') arrow!:ElementRef;

  constructor(private router: Router) {}

  toogleSideBar() {
    this.showSideBar = !this.showSideBar;
    console.log(this.showSideBar);
    if(this.showSideBar) {
      this.navigationHeader.nativeElement.style.marginLeft = '-10vw';
      this.navigationHeader.nativeElement.classList.add('animate-sidebar');
      this.bg.nativeElement.style.display = 'block';
      this.arrow.nativeElement.style.display = 'none';

    } else {
      this.navigationHeader.nativeElement.style.marginLeft = '-100vw';
      this.navigationHeader.nativeElement.classList.remove('animate-sidebar');
      this.bg.nativeElement.style.display = 'none';
      this.arrow.nativeElement.style.display = 'block';
    }
  }

  goToHome():void {
    this.router.navigate(['/home']);
  }

  backToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


}
