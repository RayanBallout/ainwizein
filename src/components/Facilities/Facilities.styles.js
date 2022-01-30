import styled from "styled-components";

export const Container = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 80px 10px;

    h2{
        font-weight: 600;
        font-size: 40px;

        span{
            font-weight: bold;
            color: var(--lightGreen);
        }
    }
`;

export const FacilitiesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 60px;
`;

export const Facility = styled.div`
    background-color: white;
    padding: 22px 61px;
    border-radius: 12px;

    img{
        max-width: 100%;
    }
`;