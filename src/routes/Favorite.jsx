import { useEffect, useState } from 'react';
import styled from 'styled-components';
import bookImage from '../assets/images/livro.png';
import { FavoriteService } from '../services/favoriteService';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Favorite() {
  const [favorite, setFavorite] = useState([]);

  async function fetchFavorite() {
    const favoriteApi = await FavoriteService.getFavorite();
    setFavorite(favoriteApi);
  }

  async function deleteFavorite(id) {
    await FavoriteService.deleteFavorite(id);
    alert(`Livro de id ${id} removido dos favoritos!`);
    await fetchFavorite();
  }

  useEffect(() => {
    fetchFavorite();
  }, []);
  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {favorite.length !== 0 ? (
            favorite.map((favorite) => (
              <Resultado onClick={() => deleteFavorite(favorite.id)}>
                <img src={bookImage} alt="Capa do livro" />
                <p>{favorite.nome}</p>
              </Resultado>
            ))
          ) : (
            <Resultado>
              <p> Você não tem livros favoritos ainda. </p>
            </Resultado>
          )}
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favorite;
