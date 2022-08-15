import styled from 'styled-components';

export const Container = styled.div`
  width: 216px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  img {
    width: 216px;
    height: 324px;
    -webkit-box-shadow: 0px 9px 16px -3px rgba(0, 0, 0, 0.59);
    box-shadow: 0px 9px 16px -3px rgba(0, 0, 0, 0.59);
    -webkit-transition: transform 0.3s;
    -moz-transition: transform 0.3s;
    -o-transition: transform 0.3s;
    transition: transform 0.3s;
  }
  &:hover {
    img {
      -webkit-transform: translatey(-0.5rem);
      -moz-transform: translatey(-0.5rem);
      -o-transform: translatey(-0.5rem);
      transform: translatey(-0.5rem);
    }
    strong {
      color: var(--red);
    }
  }
`;

export const Footer = styled.div`
  strong {
    font-size: 1rem;
    color: var(--black);
    -webkit-transition: transform 0.3s;
    -moz-transition: transform 0.3s;
    -o-transition: transform 0.3s;
    transition: transform 0.3s;
  }
`;
