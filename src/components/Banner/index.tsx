import React from 'react';

import { 
    Container,
    Wrapper,
    Banner01
} from './styles';

const Banner: React.FC = () => {
  return(
      <Container>
          <Wrapper >
                <Banner01>
                        <text>Olá, o que você está buscando?</text> <br/>
                        <text>Criar ou migrar seu e-commerce?</text>
                </Banner01>
          </Wrapper>
      </Container>
  );
}

export default Banner;