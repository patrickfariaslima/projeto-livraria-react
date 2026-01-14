import perfil from '../../assets/images/perfil.svg';
import sacola from '../../assets/images/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`;

const icones = [perfil, sacola];

export default function HeaderIcons() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt={icone}></img>
        </Icone>
      ))}
    </Icones>
  );
}
