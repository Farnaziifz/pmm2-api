export class CreateProductDTO {
  readonly name: string;
  readonly ename: string;
  readonly image: string;
  readonly category_name: string;
  readonly category_id: string;
  readonly brand_id: string;
  readonly brand_name: string;
  readonly rate: number;
  readonly mount: string;
  readonly type: string;
  readonly price: number;
  readonly hasDiscount: boolean;
  readonly discount: number;
  readonly details: string[];
  readonly description: string;
  readonly subtext: string;
}
