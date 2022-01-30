import styled from "styled-components";

export const Container = styled.div`
    padding: 60px 0;
    background-color: white;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 10px;

    h2{
        font-weight: 600;
        font-size: 40px;

        span{
            font-weight: bold;
            color: var(--lightGreen);
        }
    }
`;

export const NewsContainer = styled.div`
    margin-top: 60px;
    margin-bottom: 79px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width:768px){
        gap: 30px;
        justify-content: center;
    }
`;

export const NewsSection = styled.div`
    max-width: 350px;

    img{
        width:100%;
        max-height:200px;
        object-fit: cover;
    }

    p.category{
        font-size: 14px;
        font-weight: 500;
        color: var(--lightGreen);
    }

    p.excerpt{
        font-size: 18px;
        line-height: 33px;
    }
`;

export const ViewAllButton = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    a{
        background-color: var(--lightGreen);
        font-size: 16px;
        padding: 11px 41px;
        color: white;
        border-radius: 25px;
        text-decoration: none;
    }
`;