import { createSlice } from '@reduxjs/toolkit';

import { INIT_HERO } from '../../common/constants';

const heroSlice = createSlice({
  name: 'hero',
  initialState: INIT_HERO,
  reducers: {
    setHero: (state) => state,
  },
});

export const { setHero } = heroSlice.actions;

export default heroSlice.reducer;
