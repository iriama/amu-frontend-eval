import { TestBed } from "@angular/core/testing";

import { CustomerService } from "./customer.service";

describe("CustomerService", () => {
  let customer: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    customer = TestBed.inject(CustomerService);
  });

  it("should be created", () => {
    expect(customer).toBeTruthy();
  });

  it("addCustomer / getCustomer / getCustomers / deleteCustomer", async () => {
    const added = await customer.addCustomer("Jean Dupois", "jean.dupois@gmail.com");
    expect(added.fullName).toEqual("Jean Dupois");
    expect(added.email).toEqual("jean.dupois@gmail.com");
    const found = await customer.getCustomer(added.id);
    expect(found).toEqual(added);
    let all = await customer.getCustomers();
    expect(all).toContain(added);

    await customer.deleteCustomer(added.id);
    all = await customer.getCustomers();
    expect(all).not.toContain(added);
  });

  it("addInvoice / getInvoicesCount / getInvoices", async() => {
    const added = await customer.addCustomer("Jean Dupois", "jean.dupois@gmail.com");
    const invoice1 = await customer.addInvoice(added.id, 300, "SENT");
    const invoice2 = await customer.addInvoice(added.id, 600, "PAID");

    expect(invoice1.amount).toEqual(300);
    expect(invoice1.status).toEqual("SENT");
    expect(invoice2.amount).toEqual(600);
    expect(invoice2.status).toEqual("PAID");

    let count = await customer.getInvoicesCount(added.id);
    expect(count).toEqual(2);

    let invoices = await customer.getInvoices(added.id);
    expect(invoices.length).toEqual(2);
    expect(invoices).toContain(invoice1);
    expect(invoices).toContain(invoice2);

    await customer.deleteInvoice(invoice1.id);
    await customer.deleteInvoice(invoice2.id);
    count = await customer.getInvoicesCount(added.id);
    expect(count).toEqual(0);
    invoices = await customer.getInvoices(added.id);
    expect(invoices.length).toEqual(0);

    await customer.deleteCustomer(added.id);
  });

});
