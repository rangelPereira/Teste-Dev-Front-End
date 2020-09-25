import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height:300px;
    width:100%;
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
