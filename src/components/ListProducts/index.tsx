import React, {useEffect, useState} from 'react';
import { APIProduct } from '../../@types';
import { Container } from './styles';

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
    return <h1>Loading...</h1>
  }

  return(
    <Container>
      {data.products.map((item) => (
          <p>{item.productName}</p>
      ))}
    </Container>
  );
};
export default ListProducts;
