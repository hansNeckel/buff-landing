import { Component, OnInit } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [MatCommonModule, MatCardModule, MatButton, MatButtonModule],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss',
})
export class HeadlineComponent {
  

}
