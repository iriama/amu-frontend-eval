export interface Invoice {
  id: number;
  amount: number;
  status: "SENT" | "PAID";
}
