import styled from 'styled-components';

export const Button = styled.button`
  height: 48px;
  padding: 0.75rem 2rem;
  background: var(--red);
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.8);
  }
`;
