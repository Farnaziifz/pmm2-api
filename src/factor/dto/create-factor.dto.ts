export class CreateFactorDTO {
  readonly track_id: string;
  readonly transaction_id: string;
  readonly order_id: string;
  readonly amount: string;
  readonly date: string;
  readonly user_id: string;
  readonly user_name: string;
  readonly status: boolean;
  readonly product: string[];
  readonly user_address: string;
  readonly code: string;

}
