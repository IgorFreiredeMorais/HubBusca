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

export const Container = styled.div`
  display: flex;
  margin-left: 1.5rem;
`;

export const Number = styled.h2`
    background-color: #4ed8c7;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    text-align: center;
`;

export const Quantidade = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

export const Divisor = styled.div`
  width: 2px;
  height: 61px; 
  background-color: #4ed8c7;
  margin: 0 1rem; 
`;
