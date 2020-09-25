import styled from 'styled-components';

import { MdShoppingCart } from '../../styles/icons'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;

    height: 60px;
    padding: 0 20px;

    position: sticky;
    top: 0;
    left: 0;

`;

export const Logo = styled.img`
    width: 108px;
    height: 25px;
`;

export const MenuButton = styled.button`
    display:flex;
    flex-direction:column;

    cursor: pointer;

    > span {
        content:'';
        width:23px;
        height:3px;
        background-color:var(--secondary);
        margin-top:3px;
    }
`;

export const Shopcart = styled(MdShoppingCart)`
    width: 18px;
    height: 18px;
`;
