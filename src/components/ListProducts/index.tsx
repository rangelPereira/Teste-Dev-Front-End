import React, {useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel';
import { APIProduct } from '../../@types';
import Products from '../Products';
import { 
  Container,
  ListName,
  BorderSpan
} from './styles';


interface Data{
  products?:APIProduct[];
}

const ListProducts: React.FC = () => {
  const [data, setData] = useState<Data>();

  useEffect(() =>{
     Promise.all([
      fetch(`https://corebiz-test.herokuapp.com/api/v1/products`),
     ]).then( async (responses) =>{
        const [productsResponse] = responses;

       const products = await productsResponse.json();

       setData({
         products,
       })
     });

  }, [data]);


  if(!data?.products ){
    return <h2>Loading...</h2>
  }

  const breakPoints =[
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1150, itemsToShow: 4},
  ]

  return(
    <Container>
      <ListName>Mais Vendidos</ListName>
      <BorderSpan></BorderSpan>

      <Carousel 
      breakPoints={breakPoints}
      >
        {data.products.map((item) => (
            <Products
              key={item.productId}
              productName={item.productName}
              stars={item.stars}
              imageUrl={item.imageUrl}
              listPrice={item.listPrice}
              price={item.price}
            />
        ))}
      </Carousel>
      
    </Container>
  );
};
export default ListProducts;
