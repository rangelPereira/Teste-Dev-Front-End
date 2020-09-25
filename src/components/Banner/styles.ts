import styled from 'styled-components';

import banner01 from '../../styles/imgs/banner01.png'


export const Container = styled.div``;

export const Wrapper = styled.div`
`;
export const Banner01 = styled.div`
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.55);
    background-image: url(${banner01});
    background-size: cover;

    display:flex;
    flex-direction: column;
    justify-content:center;


    height: 200px;
    padding:30px 20px;
    color:var(--primary);

    > span:first-child {
        font-weight:700;
        font-size:20px;
    }
    > span:last-child {
        font-weight:900;
        font-size: 30px;
    }

`;
