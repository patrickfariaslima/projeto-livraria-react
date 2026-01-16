import axios from 'axios';

const favoriteAPI = axios.create({ baseURL: 'http://localhost:8000/favoritos' });

export class FavoriteService {
  static async getFavorite() {
    const response = await favoriteAPI.get('/');

    return response.data;
  }

  static async postFavorite(id) {
    await favoriteAPI.post(`/${id}`);
  }

  static async deleteFavorite(id) {
    await favoriteAPI.delete(`/${id}`);
  }
}
