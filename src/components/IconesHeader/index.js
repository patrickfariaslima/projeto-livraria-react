import "./styles.css"
import perfil from "../../assets/images/perfil.svg"
import sacola from "../../assets/images/sacola.svg"

const icones = [perfil, sacola];

export default function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <img src={icone} alt={icone}></img>
        </li>
      ))}
    </ul>
  );
}
