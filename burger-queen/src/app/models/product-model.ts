export interface ProductI {
    _id: string;
    name: string;
    price: number;
    type: string;
  }
export interface ItemI {
  product: ProductI;
  amount: number;
  userName: string;
}