import styled from "styled-components";

export const Container = styled.div`
    padding: 91px 0px 195px 0px;
    background-color: ${({ primary }) => `var(--${primary})`};
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
`;

export const Column = styled.div`
    color: white;

    h5{
        font-size: 16px;
        font-weight: 600;
    }

    ul{
        list-style:none;
    }

    li{
        margin-top: 25px;
        font-size: 16px;
    }
`;

export const BottomFooter = styled.div`
    background-color:${({ secondary }) => `var(--${secondary})`};
    padding: 27px 0;
`;

export const BottomFooterContent = styled.div`
    max-width: var(--maxWidth);
    margin: auto;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;

    @media (max-width: 992px){
        flex-direction: column-reverse;
        gap: 20px;
        text-align: center;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;

    @media (max-width: 992px){
        justify-content: center;
    }
`;