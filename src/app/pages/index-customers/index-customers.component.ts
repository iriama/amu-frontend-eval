import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/interfaces/customer.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index-customers',
  templateUrl: './index-customers.component.html',
  styleUrls: ['./index-customers.component.scss']
})
export class IndexCustomersComponent implements OnInit {

  loading = true;
  customers: Customer[] = [];

  constructor(private title: Title, private customer: CustomerService) { }

  async ngOnInit() {
    this.title.setTitle(
      environment.app_name + " - Clients"
    )

    this.customers = await this.customer.getCustomers();
    this.loading = false;

    for (const i in this.customers) {
      // non-blocking
      this.customer.getInvoicesCount(this.customers[i].id).then(
        c => this.customers[i].invoices_count = c
      );
    }
  }

}
