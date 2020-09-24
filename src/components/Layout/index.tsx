import React from 'react';
import Banner from '../Banner';
import MenuBar from '../MenuBar';

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
         </Wrapper>
      </Container>
  );
}

export default Layout;