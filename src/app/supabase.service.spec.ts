import { TestBed } from "@angular/core/testing";
import { Customer } from "./interfaces/customer.interface";
import { Invoice } from "./interfaces/invoice.interface";

import { SupabaseService } from "./supabase.service";

describe("SupabaseService", () => {
  let supra: SupabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    supra = TestBed.inject(SupabaseService);
  });

  it("should be created", () => {
    expect(supra).toBeTruthy();
  });

  it("insert / selectSingleEqual / deleteEquals", async () => {
    const added = await supra.insert<Customer>("customers", { fullName: "Jean Dupont", email: "jean.dupont@example.com" });
    expect(added.fullName).toEqual("Jean Dupont");
    expect(added.email).toEqual("jean.dupont@example.com");

    let found = await supra.selectSingleEqual("customers", "id", added.id);
    expect(found).toEqual(added);

    await supra.deleteEquals("customers", "id", added.id);
  });

  it("selectAllEqual / selectCountEquals", async () => {
    const added = await supra.insert<Customer>("customers", { fullName: "Jean Dubois", email: "jean.dubois@example.com" });
    const invoice1 = await supra.insert<Invoice>("invoices", { id_customer: added.id, amount: 500, status: "SENT" });
    const invoice2 = await supra.insert<Invoice>("invoices", { id_customer: added.id, amount: 600, status: "PAID" });

    expect(invoice1.amount).toEqual(500);
    expect(invoice1.status).toEqual("SENT");
    expect(invoice2.amount).toEqual(600);
    expect(invoice2.status).toEqual("PAID");

    const invoices = await supra.selectAllEqual<Invoice>("invoices", "id_customer", added.id);
    const count = await supra.selectCountEquals("invoices", "id_customer", added.id);

    expect(invoices.length).toEqual(2);
    expect(count).toEqual(2);

    await supra.deleteEquals("invoices", "id", invoice1.id);
    await supra.deleteEquals("invoices", "id", invoice2.id);
    await supra.deleteEquals("customers", "id", added.id);
  });
});
