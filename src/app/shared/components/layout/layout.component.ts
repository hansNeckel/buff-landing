import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponent } from '../headline/headline.component';
import { BodyLandingComponent } from '../body/body-landing/body-landing.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, HeadlineComponent, RouterOutlet, BodyLandingComponent,ContactComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {

}
