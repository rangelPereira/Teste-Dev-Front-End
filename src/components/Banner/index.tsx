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
                        <span>Olá, o que você está buscando?</span> <br/>
                        <span>Criar ou migrar seu e-commerce?</span>
                </Banner01>
          </Wrapper>
      </Container>
  );
}

export default Banner;