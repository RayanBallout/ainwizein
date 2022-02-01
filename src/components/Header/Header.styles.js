import styled from "styled-components";

export const TopHeader = styled.div`
    min-height: 50px;
    background-color:var(--grey);
    position: fixed;
    top:0;
    width:100%;
    z-index: 1;
`;

export const TopContainer = styled.div`
    max-width: var(--maxWidth);
    padding: 0 10px;
    min-height: 50px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

export const LeftNav = styled.nav`

    @media (max-width: 992px){
        width:60%;
        overflow-x: scroll;
        overflow-y: hidden;
    }

    ul{
        list-style:none;
        display: flex;
        gap: 20px;
        font-size: 14px;
        font-weight:600;
        color: #969696;

        li.selected{
            color:${({ primary }) => `var(--${primary})`};
            position: relative;
    
            &:before{
                content:"";
                position: absolute;
                width:100%;
                height: 4px;
                background-color: ${({ primary }) => `var(--${primary})`};
                bottom:-14px;
                left:0;
                border-radius: 20px 20px 0 0;
            }
        }

        li{
            flex-shrink:0;

            @media (max-width: 992px){
                position: relative;

                &:after{
                    content: "";
                    position: absolute;
                    width: 2px;
                    height: 100%;
                    right: -10px;
                    background-color: #969696;
                }
            }
        }
    }
`;

export const RightNav = styled(LeftNav)`

    @media (max-width: 992px){
        width:20%;
    }

    ul{
        li{
            @media (max-width: 992px){
                &:after{
                    content: none;
                }
            }
        }
    }
    
`;

export const BottomHeader = styled.div`
    position: fixed;
    top:50px;
    width:100%;
    background-color: ${props => props.headerColor ? 'white' : 'transparent'};
    box-shadow: ${props => props.headerColor ? '0 0 8px 0 rgba(0,0,0,0.08)' : 'none'};
    z-index: 1;
`;

export const BottomContainer = styled.div`
    max-width: var(--maxWidth);
    margin: 15px auto;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items:center;
`;

export const BottomButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:20px;

    img{
        cursor:pointer;
    }

    @media (max-width:576px){
        align-items:end;
        flex-direction: column-reverse;
    }
`;

export const SupportButton = styled.div`
    a{
        color: ${props => props.headerColor ? `var(--${props.primary})` : 'white'};
        padding: 12px 40px;
        border: 2px solid ${props => props.headerColor ? `var(--${props.primary})` : 'white'};
        border-radius: 25px;
        text-decoration: none;
    }

    @media (max-width: 576px){
        display:none;
    }
`;

export const OverlaySupportButton = styled(SupportButton)`
    display:none;

    @media (max-width: 576px){
        display:block;
    }
`;

export const OpenOverlay = styled.div`
    width: 52px;
    height:52px;
    padding: 16px 14px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background-color: rgba(0,0,0,0.28);
    border-radius:50%;
    cursor:pointer;

    .upper,.mid,.bottom{
        width: 100%;
        height: 2px;
        background-color:white;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:${({ primary }) => `var(--${primary})`};
    padding-top: 94px;
    opacity: ${props => props.show ? '1' : '0'};
    display: ${props => props.show ? 'block' : 'none'};
    transition: all 250ms ease-in;
    overflow-Y: scroll;
    z-index: 10;

    .topNav{
        max-width:var(--maxWidth);
        padding: 0 10px;
        margin:0 auto;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;

        @media (max-width: 576px){
            justify-content: space-between;
        }
    }
`;

export const CloseOverlay = styled.div`
    width: 52px;
    height:52px;
    padding: 16px 14px;
    position:relative;
    justify-content: space-around;
    flex-direction: column;
    background-color: rgba(0,0,0,0.28);
    border-radius:50%;
    cursor:pointer;

    .tick1, .tick2{
        position: absolute;
        width: 50%;
        height: 2px;
        background-color:white;
        left:50%;
        top:50%;
    }

    .tick1{
        transform: translateX(-50%) rotate(45deg);
    }

    .tick2{
        transform: translateX(-50%) rotate(-45deg);
    }
`;

export const OverlayContent = styled.div`
    display: grid;
    grid-gap: 184px;
    grid-template-columns: repeat(3 , 1fr);
    max-width: var(--maxWidth);
    padding: 0 10px;
    margin: 0 auto;
    color:white;
    margin-top: 20px;

    h3{
        font-size: 24px;
    }

    ul{
        list-style:none;
        margin-top:18px;
    }

    @media(max-width: 992px){
        grid-template-columns: repeat(2,1fr);
        column-gap: 20px;
        row-gap: 40px;
    }

    @media (max-width: 576px){
        grid-template-columns: repeat(1,1fr);
        text-align: center;
    }
`;