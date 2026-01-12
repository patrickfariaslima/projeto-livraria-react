import CardRecomendacao from '../CardRecomendacao';
import { Titulo } from '../Titulo';
import { livros } from './dados-ultimos-lancamentos';
import styled from 'styled-components';
import imagemLivro from '../../assets/images/livro2.png';

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00" tamanhoFonte="36px">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="Capa do livro" />
        ))}
      </NovosLivrosContainer>
      <CardRecomendacao
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação integrada com a plataforma Google."
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}
