import './styles.css';
import logo from '../../assets/images/logo.svg';

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo Alura Books"></img>
      <p>
        <strong>Alura</strong> Books
      </p>
    </div>
  );
}
