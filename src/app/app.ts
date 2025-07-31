import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navigation/navbar/navbar";
import { Sidenav } from "./navigation/sidenav/sidenav";
import { Footer } from "./footer/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidenav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kwaze-kreyol-ihm-web');
}
