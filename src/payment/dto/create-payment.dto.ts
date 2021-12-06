export class CreatePaymentDTO {
  readonly order_id: string;
  readonly callback: string;
  readonly amount: number;
  readonly desc: string;
}
