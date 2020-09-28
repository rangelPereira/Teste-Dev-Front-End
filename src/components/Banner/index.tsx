import React from 'react';

import { 
    Container,
    Wrapper,
    Banner01,
    RigthSide
} from './styles';

const Banner: React.FC = () => {
  return(
      <Container>
          <Wrapper >
                <Banner01>
                    <RigthSide>
                        <span>Olá, o que você está buscando?</span>
                        <span>Criar ou migrar seu e-commerce?</span>
                    </RigthSide>
                </Banner01>
          </Wrapper>
      </Container>
  );
}

export default Banner;