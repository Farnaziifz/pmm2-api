export class CreateOrderDTO {
  readonly status: string;
  readonly track_id: string;
  readonly id: string;
  readonly order_id: string;
  readonly amount: string;
  readonly card_no: string;
  readonly hashed_card_no: string;
  readonly date: string;
}
