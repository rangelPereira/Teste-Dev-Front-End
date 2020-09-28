import React from 'react';

import { 
    Container,
    NewsTitle,
    NewsInput,
    NewsButton,
    NewsForm,
    Wrapper
} from './styles';



const NewsLetter: React.FC = () => {
  return(
      <Container>
        <Wrapper>
          <NewsTitle>Participe de nossas news com promoções e novidades!</NewsTitle>
          <NewsForm>
            <NewsInput type="text" placeholder="Digite seu nome" />
            <NewsInput type="email" placeholder="Digite seu E-mail"/>

            <NewsButton type="Submit" value="Eu quero" />
          </NewsForm>
        </Wrapper>
      </Container>
  );
}

export default NewsLetter;