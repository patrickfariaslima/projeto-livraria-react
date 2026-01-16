import styled from 'styled-components';
import Input from '../Input/Input';
import { useEffect, useState } from 'react';
import getBooks from '../../services/booksService';
import { FavoriteService } from '../../services/favoriteService';
import bookImage from '../../assets/images/livro.png';

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

export default function Search() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksAPI = await getBooks();
    setBooks(booksAPI);
  }

  async function insertFavorite(id) {
    await FavoriteService.postFavorite(id);
    alert(`Livro de id ${id} adicionado aos favoritos!`);
  }

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante</Subtitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => {
          const textTyped = event.target.value;
          const searchResult = books.filter((book) => book.nome.includes(textTyped));
          setSearchedBooks(searchResult);
        }}
      />
      {searchedBooks.map((book) => (
        <Result onClick={() => insertFavorite(book.id)}>
          <img src={bookImage} alt="Capa do livro" />
          <p>{book.nome}</p>
        </Result>
      ))}
    </SearchContainer>
  );
}
