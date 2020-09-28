import styled from 'styled-components';

export const Container = styled.div`
    background: #F2F2F2;
    padding: 16px;

`; 

export const Wrapper = styled.div`
    max-width:800px;
    margin: auto;
`;


export const NewsTitle = styled.div`
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 20px;
    font-family: Lato;

    @media(min-width:768px){
        text-align: center;
    }

`;

export const NewsForm = styled.form`
    display:flex;
    flex-direction:column;


    @media(min-width:768px){
        flex-direction: row;
        justify-content:space-between;
    }
`;


export const NewsInput = styled.input`
    padding: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 20px;

    :focus{
    outline: 1px solid #BDBDBD;
    border-radius: 5px;
    }

    ::-webkit-input-placeholder{
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: #585858;
    }

    @media(min-width:768px){
        width: 39%;
        height:50px;
    }
`;

export const NewsButton = styled.input`
    height: 50px;
    min-width: 20%;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
`;