import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InvoiceGenerateComponent } from './invoice-generate/invoice-generate.component';
import { InvoiceGenerateService } from 'src/services/invoice-generate.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    InvoiceGenerateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InvoiceGenerateService],
  // bootstrap: [ApplicationComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
