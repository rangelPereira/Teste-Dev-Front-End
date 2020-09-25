import React from 'react';
import { MdStar } from '../../styles/icons';

import { 
    Container,
    ProductImage,
    ProductName,
    ProductsStar,
    ProductListPrice,
    ProductPrice,
    ButtonBuy,
} from './styles';

interface Porps{
    key: number;
    productName: any;
    stars:number;
    imageUrl:string;
    listPrice:number;
    price:number;  
}

const Products: React.FC<Porps> = ({
    productName,
    stars,
    imageUrl,
    listPrice,
    price,
}) => {
  return(
      <Container>
        <ProductImage src={imageUrl} />
        <ProductName>{productName}</ProductName>
        
        <ProductsStar>
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </ProductsStar>
        

        <ProductListPrice>{listPrice}</ProductListPrice>

        <ProductPrice>{(price/100).toLocaleString('pt-br', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})}</ProductPrice>

        <ButtonBuy>Comprar</ButtonBuy>

      </Container>
  );
}

export default Products;