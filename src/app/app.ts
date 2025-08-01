import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navigation/navbar/navbar";
import { Sidenav } from "./navigation/sidenav/sidenav";
import { Footer } from "./footer/footer/footer";
import { MatDrawer, MatDrawerContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidenav, Footer, MatSidenavContent, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kwaze-kreyol-ihm-web');
  @ViewChild('sidenavContent') sidenavContent!: ElementRef;

  call(){
    console.log('call');
  }
}
