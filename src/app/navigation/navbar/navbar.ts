import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { Sidenav } from "../sidenav/sidenav";

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Input() drawer!: MatSidenav;

  toggle() {
    this.drawer.toggle();
  }
}
