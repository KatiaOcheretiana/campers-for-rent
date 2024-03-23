import { createSlice } from '@reduxjs/toolkit';

export const storageKey = 'favorites';

const getInitialFavorites = () => {
  const favoritesCampers = localStorage.getItem(storageKey);
  return favoritesCampers !== null ? JSON.parse(favoritesCampers) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesCampers: getInitialFavorites(),
  },
  reducers: {
    addFavorite(state, action) {
      state.favoritesCampers = [...state.favoritesCampers, action.payload];
    },
    deleteFavorite(state, action) {
      state.favoritesCampers = state.favoritesCampers.filter(
        (camp) => camp !== action.payload
      );
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
