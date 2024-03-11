import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components-shared/header/header.component';
import { FooterComponent } from './shared/components-shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HousesService } from './shared/services/houses.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
  ],
  providers: [
    HousesService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rentiz';
}
