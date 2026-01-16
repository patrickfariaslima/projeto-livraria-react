import { books } from './latestReleasesData';
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
        {books.map((book) => (
          <img src={book.src} alt="Capa do livro" />
        ))}
      </NewBooksContainer>
      <RecommendationCard
        title="Talvez você se interesse por..."
        subtitle="Angular 11"
        description="Construindo uma aplicação integrada com a plataforma Google."
        img={imagemLivro}
      />
    </LatestReleasesContainer>
  );
}
