import styled from "styled-components";

export const Container = styled.div`
    padding: 70px 0;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 10px;

    h2{
        font-weight: 600;
        font-size: 40px;

        span{
            font-weight: bold;
            color: var(--lightGreen);
        }
    }
`;

export const ServicesContainer = styled.div`
    margin-top: 79px;
    display: flex;
    justify-content: space-between;
    gap: 80px;

    @media (max-width: 992px){
        flex-direction: column;
        margin-top: 40px;
    }
`;

export const ServicesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 70%;

    @media (max-width: 992px){
        width: 100%;
    }
    
`;

export const Service = styled.div`
    background-color: white;
    padding: 30px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap:20px;

    .icon{
        background-color: #EEF2F8;
        padding:13px;
        border-radius: 13px;
    }

    .text{
        max-width: 60%;

        h5{
            font-size: 24px;
        }

        p{
            font-size: 14px;
        }

        @media (max-width: 768px){
            max-width: unset;
        }
    }

    @media (max-width: 768px){
        flex-direction: column;
        padding: 10px 20px;
    }

    .learn-more{
        color: white;
        padding: 10px 22px;
        background-color: var(--lightGreen);
        border-radius: 25px;

        @media (max-width: 992px){
            justify-self: flex-end;
        }
    }
`;

export const ColoredService = styled.div`
    background-color:rgba(13,127,104,0.8);
    min-height: 290px;
    align-self: end;
    border-radius: 10px;
    padding: 62px 0;
    color: white;

    @media (max-width: 992px){
        align-self: unset;
        width: 100%;
    }
`;

export const ColoredServiceContent = styled.div`
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h5{
        font-size: 24px;
        margin-bottom: 10px;
    }

    p{
        font-size: 14px;
        margin-bottom: 27px;
    }

    .button-container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        a{
            padding: 11px 31px;
            border: 2px solid white;
            border-radius: 24px;
            color: white;
            text-decoration: none;
        }

        a.phone{
            display: flex;
            align-items: center;
            gap: 4px;
        }

        a.contact{
            color: var(--lightGreen);
            background-color: white;
        }

        @media (max-width: 768px){
            flex-direction: column;
            gap: 10px;
        }
    }
`;