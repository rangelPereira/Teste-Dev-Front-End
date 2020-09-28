import React from 'react';
import Banner from '../Banner';
import MenuBar from '../MenuBar';
import ListProducts from '../ListProducts';
import Footer from '../Footer';

import { 
  Container,
  Wrapper
} from './styles';
import NewsLetter from '../NewsLetter';

const Layout: React.FC = () => {
  return(
      <Container>
         <Wrapper>
           <MenuBar />
           <Banner />
           <ListProducts />
         </Wrapper>
         <NewsLetter />
         <Footer />
      </Container>
  );
}

export default Layout;