import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchHero } from '../../services/hero';

export const fetchHeroAction = createAsyncThunk('hero/fetchHero', async () =>
  fetchHero().then((res) => res.data)
);
