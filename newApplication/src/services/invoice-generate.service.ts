import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class InvoiceGenerateService {

  url = 'http://localhost:7000/invoices/create';
  constructor(private http: HttpClient) { }
  
  getInvoice (req) {
    let header = new HttpHeaders();
    header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.url, req, {headers: header});
  }
}
