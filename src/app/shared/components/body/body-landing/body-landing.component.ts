import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-body-landing',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatButton,
    MatMenuModule,
    MatCardModule,
  ],
  templateUrl: './body-landing.component.html',
  styleUrl: './body-landing.component.scss'
})
export class BodyLandingComponent {

}
