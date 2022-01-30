import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/customer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index-customers',
  templateUrl: './index-customers.component.html',
  styleUrls: ['./index-customers.component.scss']
})
export class IndexCustomersComponent implements OnInit {

  constructor(private title: Title, private customer: CustomerService) { }

  async ngOnInit() {
    this.title.setTitle(
      environment.app_name + " - Clients"
    )

    console.log(await this.customer.getCustomers());
  }

}
