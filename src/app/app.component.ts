import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Car Service';
}
