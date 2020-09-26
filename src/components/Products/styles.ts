import styled from 'styled-components';
import { MdStar, MdStarBorder } from '../../styles/icons';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position:relative;

    height:300px;
    overflow: hidden;
`;

export const Flag = styled.div`
    background: #F8475F;

    position:absolute;
    right:0;

    transform: rotate(45deg);
    margin-right: -40px;
    margin-top: -40px;

    width: 80px;
    height: 80px;
    >span{

        color: #fff;
        font-size: 10px;

        margin-left: 30px;
        transform: rotate(-45deg);
        position: absolute;
        margin-top: 60px;
    }
`;

export const ProductImage = styled.img`
    width: 140px;
`;

export const ProductName = styled.div`
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    text-align: center;

    color:var(--productDetails);
`;

export const ProductsStar = styled.span`
    display: flex;
    justify-content: center;
`;

export const Star = styled(MdStar)`
        color: #F8475F;

`
export const StarBorder = styled(MdStarBorder)`
        color: #F8475F;

`

export const ProductListPrice = styled.div`
    font-weight: bold;
    font-size: 11px;
    line-height: 15px;
    text-align: center;

    color:var(--productDetails);
`;

export const ProductPrice = styled.div`
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: center;

    color:var(--secundary);

`;

export const ButtonBuy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width:140px;
    height: 36px;
    cursor:pointer;

    background:#000;
    color:var(--primary);
    border-radius: 6px;

`;
