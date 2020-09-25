import React from 'react';
import Banner from '../Banner';
import MenuBar from '../MenuBar';
import ListProducts from '../ListProducts';

import { 
  Container,
  Wrapper
} from './styles';

const Layout: React.FC = () => {
  return(
      <Container>
         <Wrapper>
           <MenuBar />
           <Banner />
           <ListProducts />
         </Wrapper>
      </Container>
  );
}

export default Layout;