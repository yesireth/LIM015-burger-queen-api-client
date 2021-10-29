export interface ProductI {
    _id: string;
    name: string;
    price: number;
    type: string;
  }

//NUEVO
export class Order{
    userId : string = ""; //usuario logeado
    client : string= ""; //userName del input
    status : string= "";
    products :  OrderDetail[] = [];
}

export class OrderDetail {
   qty: number = 0;
   product: string = ""; //id del producto
   price :number = 0;
   productName = ""; 
}
