import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html'
})
export class CreateInvoiceComponent implements OnInit {

  error = false;
  loading = false;
  id_customer: number|null = null;

  constructor(private title: Title, private route: ActivatedRoute, private router: Router, private customer: CustomerService) { }

  ngOnInit(): void {
    this.title.setTitle(
      environment.app_name + " - Ajouter une facture"
    );

    this.route.params.subscribe(async params => {
      try {
        this.id_customer = parseInt(params["id"]);
      } catch(e) {
        console.error(e);
        this.router.navigate(["/"]);
      }
    });
  }

  async onSubmit(f: NgForm) {

    if (!this.id_customer) return;

    if (f.form.status !== "VALID") {
      this.error = true;
      return;
    }

    this.loading = true;
    await this.customer.addInvoice(this.id_customer, f.value["amount"], f.value["status"]);
    this.router.navigate(["/" + this.id_customer]);
  }

}
