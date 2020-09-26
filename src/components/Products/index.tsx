import React from 'react';

import { 
    Container,
    Flag,
    ProductImage,
    ProductName,
    ProductsStar,
    ProductListPrice,
    ProductPrice,
    ButtonBuy,
    Star,
    StarBorder
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
  let oldPrice = '';
  let flagOff = [];

  if(listPrice){
    oldPrice = (listPrice/100).toLocaleString('pt-br', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'});
    flagOff.push(<Flag><span>OFF</span></Flag>);
  }

  const rating = () => {
    let averageStars = stars
    let starsRating = []

    for(let i = 1;i <= 5; i++)
    {
      starsRating.push(<span> {i <= averageStars ? <Star /> : <StarBorder />}  </span>)
    }

  return starsRating;
  }

  return(
      <Container>
        {flagOff}
        <ProductImage src={imageUrl} />
        <ProductName>{productName}</ProductName>

        <ProductsStar >
          {rating()}
 
        </ProductsStar>
        

        <ProductListPrice>{oldPrice}</ProductListPrice>

        <ProductPrice>{(price/100).toLocaleString('pt-br', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})}</ProductPrice>

        <ButtonBuy>Comprar</ButtonBuy>

      </Container>
  );
}

export default Products;