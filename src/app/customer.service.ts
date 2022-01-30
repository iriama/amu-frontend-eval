import { Injectable } from '@angular/core';
import { Customer } from './interfaces/customer.interface';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private supabase: SupabaseService) { }

  async getCustomers() {
    const customers = await this.supabase.selectAll<Customer>("customers");

    for (let i in customers) {
      customers[i].invoices_count = await this.supabase.selectCountEquals("invoices", "id_customer", customers[i].id);
    }

    return customers;
  }

  getCustomer(id: number) {
    return this.supabase.selectSingleEqual<Customer>("customers", "id", id);
  }

}
