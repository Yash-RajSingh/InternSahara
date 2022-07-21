import styled from "styled-components";

export const MessageContainer = styled.div`
    margin-top: 10%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 720px) {
        margin-top: 20%;
        flex-direction: column;
    }
`

export const HiredImage = styled.img`
    width: 25%;
    @media (max-width: 720px) {
        width: 50%;
        margin-top: 10%;
    }
`

export const HiredMessage = styled.p`
    font-size: 3.5rem;
    font-family: 'Caveat';
    text-align: center;
    font-weight: 600;
    @media (max-width: 720px) {
        font-size: 3rem;
    }
`