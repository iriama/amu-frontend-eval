import { Injectable } from '@angular/core';
import { Customer } from './interfaces/customer.interface';
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

  async getInvoicesCount(id_customer: number) {
    return await this.supabase.selectCountEquals("invoices", "id_customer", id_customer);
  }
}
