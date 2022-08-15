import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 620px;
  height: 3rem;
  padding: 0.75rem;
  background: var(--input-background);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    border-color: #719ece;
    box-shadow: 0 0 2px #719ece;
  }
`;
