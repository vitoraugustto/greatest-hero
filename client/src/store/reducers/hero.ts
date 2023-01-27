import { createSlice } from '@reduxjs/toolkit';

import { INIT_HERO } from '../../common/constants';
import { fetchHeroAction } from '../actions/hero';

const heroSlice = createSlice({
  name: 'hero',
  initialState: INIT_HERO,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchHeroAction.fulfilled,
      (state, action) => (state = action.payload)
    );
  },
});

export default heroSlice.reducer;
