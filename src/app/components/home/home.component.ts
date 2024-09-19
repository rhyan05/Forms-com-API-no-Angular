import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatSlideToggleModule, MatButtonModule, CommonModule, MatButtonModule, MatIcon],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})

export class HomeComponent {
  title_home = "Nos conheça";
  subtitle_home = "Venha ser mais um das escolas a possuir essa nova tecnologia";
  isChecked = false;

  constructor(
    private  router: Router
  ){

  }

  toggleButton(event: any) {
    this.isChecked = event.checked; 
  }

  onClick(){

    this.router.navigate(['cadastro'])
  }
}
