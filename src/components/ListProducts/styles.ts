import styled from 'styled-components';

export const Container = styled.div`
    padding:5px;
    max-width:1280px;
    margin:auto;

    >.rec .rec-slider-container{
        margin:0px;
    }

    >.rec .rec-dot {
        box-shadow: none;
        background: #BDBDBD;

        height:7px;
        width:7px;

    }
    >.rec .rec-dot_active{
        background: #F8475F;
    }

    >.rec .rec-arrow{
        display:none;
    }

    @media(min-width:1150px){
        padding-top: 25px;

        padding-bottom: 60px;

        >.rec .rec-arrow{
            display:unset;
            margin:-60px;
            z-index:2;

            background:#fff;
            box-shadow:none;
            color:var(--secundary);
        }
        
        >.rec .rec-dot {
            display:none;
        }
    }

`;

export const BorderSpan = styled.div`
    border-bottom: 5px solid #C0C0C0;
    width:65px;
    margin-left: 10px;
`;

export const ListName = styled.h2`
    font-weight: 900;
    font-size: 28px;
    padding-left: 10px;

    color:var(--secundary);
`;