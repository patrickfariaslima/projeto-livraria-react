import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Option = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;

const Options = styled.ul`
  display: flex;
`;

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

export default function HeaderOptions() {
  return (
    <Options>
      {textOptions.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
          <Option>
            <p>{texto}</p>
          </Option>
        </Link>
      ))}
    </Options>
  );
}
