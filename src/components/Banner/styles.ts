import styled from 'styled-components';

import banner01 from '../../styles/imgs/banner01.png'


export const Container = styled.div`
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.55);
    background-image: url(${banner01});
    background-size: cover;  
`;

export const Wrapper = styled.div`
    display:flex;

    max-width: 1280px;
    height: 200px;

    padding:30px 20px;
    margin:auto;

    color:var(--primary);

    @media(min-width:768px){
        height: 400px;
    }

`;
export const Banner01 = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
`;

export const RigthSide = styled.div`
    width: 45%;
    
    > span:first-child {
        font-weight:700;
        font-size:20px;
    }
    > span:last-child {
        font-weight:900;
        font-size: 24px;
    }

    @media(min-width:768px){
        > span:first-child {
            font-size:30px;
        }

        > span:last-child {
            font-size: 48px;
            line-height: 50px;
        }

    }
`;

