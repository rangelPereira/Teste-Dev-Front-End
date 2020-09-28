import styled from 'styled-components';
import { MdEmail, MdHeadsetMic } from '../../styles/icons';
import '../../styles/Fontes/Nunito-Bold.ttf';


export const Container = styled.div`
    padding:15px;
    background: var(--secondary);
    color: var(--primary);
`;

export const Wrapper = styled.div`
    @media(min-width:768px){
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-areas:
            "local contacts create"
        ;

        justify-content:space-between;
        align-items: center;    

        max-width: 1280px;
        padding:25px 0;
        margin: auto;
    }
`;


export const Description = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;

    > p{
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    }
`;

export const Location = styled.div`
    grid-area:local;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
`;

export const BorderSpan = styled.div`
    border-bottom: 5px solid var(--primary);
    width:65px;
    margin: 10px 0px;
`;

export const Contacts = styled.div`
    grid-area:contacts;

`;

export const ButtonContacts = styled.div`
    display:flex;
    align-items: center;
    

    background: var(--primary);
    border-radius: 5px; 

    width: 80%;
    margin:20px auto;
    padding: 5px 20px;
    color: var(--secondary);

    > p{
        font-size: 12px;
        margin-left:15px;
    }

    @media(min-width:768px){
        width: 50%;
        margin:20px auto;

    }
`;

export const Copywriter = styled.div`
    grid-area:create;

    display:flex;
    justify-content:space-between;

    width: 90%;
    margin: auto;

    @media(min-width:768px){
        justify-content:unset;
    }

`;

export const Created = styled.div`
    padding-right: 30px;

> p {
        font-size: 10px;
        line-height: 14px;
    }
`

export const CoreImg = styled.img`
    height: 18px;
    width:auto;
`

export const Powered = styled.div`
    > p {
        font-size: 10px;
        font-weight: 400;
        line-height: 14px;
    }
`

export const VtexImg = styled.img`
    height: 18px;
    width:auto;
`



export const IconEmail = styled(MdEmail)`
    width: 30px;
    height: auto;
`;

export const IconPhone = styled(MdHeadsetMic)`
    width: 40px;
    height: auto;
`;
