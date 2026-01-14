import Logo from '../Logo/Logo';
import OpcoesHeader from '../HeaderOptions/HeaderOptions.jsx';
import IconesHeader from '../HeaderIcons/HeaderIcons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}
