import { useCallback, useState } from 'react';

import { useComicsSelected } from '../../hooks/useComicsSelected';

import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/cartIcon.svg';

import * as S from './styles';
import ModalSelectShippingAddress from '../ModalSelectShippingAddress';

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { comics } = useComicsSelected();

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <>
      <S.Container>
        <div>
          <img src={logo} alt="Logo Marvel" />
          <S.ButtonCart onClick={() => setModalIsOpen(true)}>
            <div>
              <strong>Carrinho</strong>
              <span>{comics.length} Quadrinhos</span>
            </div>
            <img src={cartIcon} alt="Carrinho" />
          </S.ButtonCart>
        </div>
      </S.Container>
      <ModalSelectShippingAddress
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}

export default Header;
