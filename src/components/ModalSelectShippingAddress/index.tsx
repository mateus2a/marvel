import { useState } from 'react';

import { useComicsSelected } from '../../hooks/useComicsSelected';

import Modal from '../Modal';
import Button from '../Button';
import GoogleMaps from '../MapWrapper';

import * as S from './styles';

interface ModalSelectShippingAddressProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function ModalSelectShippingAddress({
  isOpen,
  onRequestClose,
}: ModalSelectShippingAddressProps) {
  const [isShippingRequested, setIsShippingRequested] = useState(false);

  const { comics } = useComicsSelected();

  function handleRequestCloseModal() {
    setIsShippingRequested(false);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => handleRequestCloseModal()}
      contentLabel="Select Shipping Address"
    >
      <S.Container>
        <S.Wrapper isVisible={!isShippingRequested}>
          <h2>Selecione no mapa o endereço para envio dos quadrinhos</h2>
          <S.Content>
            <S.MapWrapper>
              <GoogleMaps />
            </S.MapWrapper>
            <S.ListComics>
              <strong>Quadrinhos Selecionados:</strong>
              {comics.length < 1 && <p>Nenhum Quadrinho selecionado!</p>}
              <ul>
                {comics.map((comic) => (
                  <li key={comic.id}>{comic.title}</li>
                ))}
              </ul>
            </S.ListComics>
          </S.Content>
          {comics.length > 0 && (
            <Button
              title="Solicitar Envio!"
              onClick={() => setIsShippingRequested(true)}
            />
          )}
        </S.Wrapper>
        <S.InfoText isVisible={isShippingRequested}>
          Envio solicitado!
        </S.InfoText>
      </S.Container>
    </Modal>
  );
}

export default ModalSelectShippingAddress;
