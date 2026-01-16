import perfil from '../../assets/images/perfil.svg';
import sacola from '../../assets/images/sacola.svg';
import styled from 'styled-components';

const Icon = styled.li`
  width: 25px;
`;

const Icons = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`;

const icons = [perfil, sacola];

export default function HeaderIcons() {
  return (
    <Icons>
      {icons.map((icon) => (
        <Icon>
          <img src={icon} alt={icon}></img>
        </Icon>
      ))}
    </Icons>
  );
}
