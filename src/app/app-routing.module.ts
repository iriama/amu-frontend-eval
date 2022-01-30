import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { IndexCustomersComponent } from './pages/index-customers/index-customers.component';
import { IndexInvoicesComponent } from './pages/index-invoices/index-invoices.component';

const routes: Routes = [
  { path: "", component: IndexCustomersComponent },
  { path: "create", component: CreateCustomerComponent },
  { path: ":id", component: IndexInvoicesComponent },
  { path: ":id/invoices/add", component: CreateInvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
