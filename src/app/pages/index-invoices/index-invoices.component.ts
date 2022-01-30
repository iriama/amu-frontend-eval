import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerService } from "src/app/customer.service";
import { Customer } from "src/app/interfaces/customer.interface";
import { Invoice } from "src/app/interfaces/invoice.interface";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-index-invoices",
  templateUrl: "./index-invoices.component.html",
  styleUrls: ["./index-invoices.component.scss"]
})
export class IndexInvoicesComponent implements OnInit {

  loading = false;
  current: Customer | null = null;
  invoices: Invoice[] = [];

  constructor(private title: Title, private route: ActivatedRoute, private router: Router, private customer: CustomerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      try {
        const id_client = parseInt(params["id"]);
        this.current = await this.customer.getCustomer(id_client);
        this.title.setTitle(`${environment.app_name} - Fiche de ${this.current.fullName}`);
        this.invoices = await this.customer.getInvoices(id_client);
      } catch(e) {
        console.error(e);
        this.router.navigate(["/"]);
      }
    });
  }

  statusText(text: string) {
    return text == "PAID" ? "Payée" : "Envoyée";
  }

}
