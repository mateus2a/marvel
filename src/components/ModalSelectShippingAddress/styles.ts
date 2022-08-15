import styled from 'styled-components';

interface WrapperProps {
  isVisible: boolean;
}

interface InfoTextProps {
  isVisible: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transition: opacity 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  h2 {
    width: 100%;
    padding-right: 2.5rem;
  }
  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
    h2 {
      text-align: center;
      padding-right: 0;
      margin-top: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MapWrapper = styled.div`
  min-width: 300px;
  height: 300px;
  @media (max-width: 576px) {
    min-width: 270px;
    height: 270px;
  }
`;

export const ListComics = styled.div`
  ul {
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
    height: 280px;
    overflow-y: auto;
    padding-top: 0.5rem;
    li {
      margin-left: 1.5rem;
    }
    li + li {
      margin-top: 0.25rem;
    }
  }
  p {
    font-size: 0.825rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
  @media (max-width: 768px) {
    ul {
      height: auto;
    }
  }
`;

export const InfoText = styled.h2<InfoTextProps>`
  position: absolute;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.6s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;
