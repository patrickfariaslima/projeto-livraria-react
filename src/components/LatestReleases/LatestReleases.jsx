import { livros } from './latestReleasesData';
import styled from 'styled-components';
import imagemLivro from '../../assets/images/livro2.png';
import RecommendationCard from '../RecommendationCard/RecommendationCard';
import { Title } from '../Title/Title';

const LatestReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export default function LatestReleases() {
  return (
    <LatestReleasesContainer>
      <Title cor="#EB9B00" tamanhoFonte="36px">
        ÚLTIMOS LANÇAMENTOS
      </Title>
      <NewBooksContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="Capa do livro" />
        ))}
      </NewBooksContainer>
      <RecommendationCard
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação integrada com a plataforma Google."
        img={imagemLivro}
      />
    </LatestReleasesContainer>
  );
}
