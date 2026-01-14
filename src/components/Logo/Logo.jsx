import logo from '../../assets/images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  font-size: 30px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo Alura Books" />
      <p>
        <strong>Alura</strong> Books
      </p>
    </LogoContainer>
  );
}
