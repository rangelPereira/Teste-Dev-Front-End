export interface APIProduct{
    productId: number;
    productName: String;
    stars:number;
    imageUrl:string;
    listPrice:number;
    price:number;
    installments:{
        quantity:number;
        value:number;
    }
}