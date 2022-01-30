import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    right: 16px;
    top: 40%;
    z-index: 2;
    max-width: 84px;
    text-align: center;
    font-size: 12px;

    @media (max-width: 768px){
        top: unset;
        bottom: 10px;
    }
`;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    

    @media (max-width: 768px){
        &:first-child{
            transform: ${props => props.click ? 'translateY(0px)' : 'translateY(230px)'};
        }

        &:nth-child(2){
            transform: ${props => props.click ? 'translateY(0px)' : 'translateY(135px)'};
        }

        transition: all 250ms ease-in;
        color: ${props => props.click ? 'black' : ' rgba(0,0,0,0)'};
    }
`;

export const Icon = styled.div`
    background-color: var(--lightGreen);
    padding: 12px;
    border-radius: 50%;
    box-shadow: 2px 4px 4px 0 rgb(21 100 84);
`;

export const AddButton = styled(Button)`
    display: none;
    transform: ${props => props.click ? 'rotate(135deg)' : 'rotate(0deg)'};

    @media (max-width: 768px){
        display: block;
        padding: 22px 12px;
    }
`;