import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceGenerateService } from 'src/services/invoice-generate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [InvoiceGenerateService]
})
export class AppComponent {
  title = 'newApplication';
}
