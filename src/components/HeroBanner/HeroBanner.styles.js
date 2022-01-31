import styled from "styled-components";

export const SuperContainer = styled.section`
    position: relative;
    overflow: hidden;
    .background-image{
        position:absolute;
        z-index:-1;
        
    }
`;

export const Container = styled.div`
   min-height: 665px;
`;

export const Content = styled.div`
    min-height: 665px;
    padding:0 10px;
    max-width: var(--maxWidth);
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    color: white;

    p{
        font-size: 16px;
    }

    h1{
        font-size: 50px;
        font-weight: 600;
    }

    .learn-more{
        border: 2px solid white;
        color: white;
        padding: 12px 35px;
        font-size: 16px;
        max-width: 168px;
        border-radius: 25px;
        margin-top: 31px;
    }
`;



export const CovidBanner = styled.div`
    min-height: 170px;
    max-width: 282px;
    padding: 22px 19px;
    position: absolute;
    bottom: 0;
    right: 2%;
    background-color: var(--lightGreen);
    border-radius: 53px 53px 0 0;
    color: white;

    h3{
        font-size: 30px;
        font-weight: bold;
    }

    p{
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 14px;
    }
    
    a{
        padding: 6px 15px;
        color: var(--lightGreen);
        background-color: white;
        font-size: 13px;
        border-radius: 25px;
        text-decoration: none;
    }

    @media (max-width: 768px){
        position: static;
        max-width: unset;
        border-radius: unset;
        width: 100%;
    }
`;