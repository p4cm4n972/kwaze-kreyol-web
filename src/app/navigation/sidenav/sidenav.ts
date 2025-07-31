import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavContainer, MatSidenav,],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {
  @ViewChild('drawer') drawer!: MatSidenav;

  toggle() {
    this.drawer.toggle();
  }
}
