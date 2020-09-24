import React from 'react';
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
         </Wrapper>
      </Container>
  );
}

export default Layout;