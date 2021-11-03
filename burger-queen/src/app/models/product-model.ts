export interface ProductI {
    _id: string;
    name: string;
    price: number;
    type: string;
  }

//NUEVO
export class Order{
    _id    : string = "" ;
    userId : any ; //usuario logeado
    client : string= ""; //userName del input
    status : string= "";
    products :  OrderDetail[] = [];
}

export class OrderDetail {
   qty: number = 0;
   productId: string = ""; //id del producto
   price :number = 0;
   productName = ""; 
}
