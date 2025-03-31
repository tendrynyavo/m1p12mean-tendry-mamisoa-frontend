import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
  standalone: true,
  selector: 'Home',
  imports: [CommonModule, TopBarComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {}

}