import React from 'react';
import corebiz from '../../styles/imgs/corebiz.png';
import Vtex from '../../styles/imgs/vtex.png';

import { 
    Container,
    Wrapper,
    Description,
    Location,
    BorderSpan,
    Contacts,
    Copywriter,
    ButtonContacts,
    IconEmail,
    IconPhone,
    Created,
    CoreImg,
    Powered,
    VtexImg
} from './styles';

const Footer: React.FC = () => {
  return(
      <Container>
        <Wrapper>
          <Description>
            <Location>Localização </Location>
            <BorderSpan></BorderSpan>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p>Alphavile SP</p>
            <p>brasil@corebiz.ag</p>
            <p>+55 11 3090 1039</p>
          </Description>

          <Contacts>
            <ButtonContacts>
                <IconEmail />
                <p>ENTRE EM CONTATO</p>
            </ButtonContacts>

            <ButtonContacts>
                <IconPhone />
                <p>FALE COM O NOSSO CONSULTOR ONLINE</p>
            </ButtonContacts>
          </Contacts>

          <Copywriter>
            <Created>
                <p>Created By</p>
                <CoreImg src={corebiz} />
            </Created>

            <Powered>
                <p>Powered By</p>
                <VtexImg src={Vtex} />
            </Powered>
          </Copywriter>
        </Wrapper>
      </Container>
  );
}

export default Footer;