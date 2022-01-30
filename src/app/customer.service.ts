import { Injectable } from '@angular/core';
import { Customer } from './interfaces/customer.interface';
import { Invoice } from './interfaces/invoice.interface';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private supabase: SupabaseService) { }

  getCustomers() {
    return this.supabase.selectAll<Customer>("customers");
  }

  getCustomer(id: number) {
    return this.supabase.selectSingleEqual<Customer>("customers", "id", id);
  }

  getInvoicesCount(id_customer: number) {
    return this.supabase.selectCountEquals("invoices", "id_customer", id_customer);
  }

  addCustomer(fullName: string, email: string) {
    return this.supabase.insert("customers", { fullName, email });
  }

  getInvoices(id_customer: number) {
    return this.supabase.selectAllEqual<Invoice>("invoices", "id_customer", id_customer);
  }

  addInvoice(id_customer: number, amount: number, status: string) {
    return this.supabase.insert("invoices", { id_customer, amount, status });
  }
}
