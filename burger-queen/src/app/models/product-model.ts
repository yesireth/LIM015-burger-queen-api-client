export interface ProductI {
    _id: string;
    name: string;
    price: number;
    type: string;
  }
export interface ItemI {
/*   client: string; */
  product: ProductI;
  amount: number;

}