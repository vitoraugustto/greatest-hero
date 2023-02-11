import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHero } from '@services/hero';

export const fetchHeroAction = createAsyncThunk('hero/fetchHero', () =>
  fetchHero().then((res) => res.data)
);
