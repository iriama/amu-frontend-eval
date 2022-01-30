import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CustomerService } from "src/app/customer.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.component.html"
})
export class CreateCustomerComponent implements OnInit {

  error = false;
  loading = false;

  constructor(private title: Title, private customer: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle(
      environment.app_name + " - Créer un client"
    );
  }

  private titleCaseName(name: string) {
    let res = "";
    for (const part of name.split(" ")) {
      res += part[0].toUpperCase() + part.substring(1).toLowerCase() + " ";
    }

    return res.trimEnd();
  }

  async onSubmit(f: NgForm) {
    if (f.form.status !== "VALID") {
      this.error = true;
      return;
    }

    this.loading = true;
    await this.customer.addCustomer(this.titleCaseName(f.form.value["fullName"]), f.form.value["email"].toLowerCase());
    this.router.navigate(["/"]);
  }

}
