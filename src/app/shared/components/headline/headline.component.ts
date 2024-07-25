import { Component, OnInit } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [MatCommonModule, MatCardModule, MatButton],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss',
})
export class HeadlineComponent {
  

}
