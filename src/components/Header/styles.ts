import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--black);
  > div {
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonCart = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--input-background);
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.7);
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    strong {
      font-size: 1rem;
    }
    span {
      font-size: 0.75rem;
    }
  }
`;
