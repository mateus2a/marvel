import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  > button {
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background: transparent;
    z-index: 1;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
  @media (max-width: 992px) {
    max-width: 650px;
  }
  @media (max-width: 768px) {
    max-height: 80vh;
    max-width: 450px;
  }
  @media (max-width: 576px) {
    max-height: 80vh;
    max-width: 270px;
  }
`;
