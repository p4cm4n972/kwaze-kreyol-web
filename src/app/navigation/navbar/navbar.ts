import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @ViewChild('drawer') drawer!: MatSidenav;

  toggle() {
    this.drawer.toggle();
  }
}
