import './styles.css';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}
