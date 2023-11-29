import styled from "styled-components";

export const User = styled.div`
    background-color: #2b3566;
    padding: 2rem;
    border-radius: 1rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
`;

export const Imagem = styled.img`
    width: 140px;
    height: 140px;
    border: 4px solid #644aff;
    border-radius:50%;

    svg{
        fill: #4ed8c7;
        font-size: 1.5rem;
    }

`;

export const Span = styled.span`
    color: #9da5d1;
    font-weight: bold;
`;

export const Location = styled.p`
    display: flex;
    align-items: center;
    gap: 0.4rem;

  svg {
    fill: #4ed8c7;
    font-size:1.5rem;
  }
`;

