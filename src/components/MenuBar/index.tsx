import React from 'react';

import corebizlogo from '../../styles/imgs/Vector.png';

import { Container, Logo, MenuButton, Shopcart } from './styles';

const MenuBar: React.FC = () => {
  return(
    <Container>
        <MenuButton>
            <span></span>
            <span></span>
            <span></span>
        </MenuButton>

            <Logo src={corebizlogo} alt="logo corebiz"/>

        <MenuButton>
            <Shopcart />
        </MenuButton>
    </Container>
  );
}

export default MenuBar;