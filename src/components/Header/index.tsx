import * as S from './styles';

import logo from '../../assets/logo.svg';

function Header() {
  return (
    <S.Container>
      <img src={logo} alt="Logo Marvel" />
    </S.Container>
  );
}

export default Header;
