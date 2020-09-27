import React from 'react';
import Banner from '../Banner';
import MenuBar from '../MenuBar';
import ListProducts from '../ListProducts';
import Footer from '../Footer';

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
         <Footer />
      </Container>
  );
}

export default Layout;