import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    width: 100%;
    margin-bottom: 1.5rem;
    padding-right: 2.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  img {
    width: 250px;
    height: 375px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 180px;
      height: 270px;
    }
  }
`;

export const ContentDetail = styled.div`
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--border);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: var(--red);
  }
  width: 100%;
  height: 375px;
  overflow-y: auto;
  padding-right: 1rem;
  > div {
    margin-bottom: 1rem;
    strong {
      font-size: 1.25rem;
    }
    ul {
      li {
        margin-left: 1.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    overflow-y: hidden;
    height: auto;
  }
`;
