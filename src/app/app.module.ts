import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexCustomersComponent } from './pages/index-customers/index-customers.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { IndexInvoicesComponent } from './pages/index-invoices/index-invoices.component';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexCustomersComponent,
    CreateCustomerComponent,
    IndexInvoicesComponent,
    CreateInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
