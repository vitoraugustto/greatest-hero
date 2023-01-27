import { createSlice } from '@reduxjs/toolkit';

import { INIT_HERO } from '../../common/constants';
import { IAsyncAction } from '../../common/interfaces';
import { fetchHeroAction } from '../actions/hero';

const initialState: typeof INIT_HERO & IAsyncAction = {
  ...INIT_HERO,
  loading: 'idle',
};

const heroSlice = createSlice({
  name: 'hero',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        fetchHeroAction.fulfilled,
        (state, action) => (state = { ...action.payload, loading: 'succeeded' })
      )
      .addCase(
        fetchHeroAction.pending,
        (state) => (state = { ...state, loading: 'pending' })
      )
      .addCase(
        fetchHeroAction.rejected,
        (state, action) =>
          (state = { ...state, loading: 'failed', error: action.error.message })
      );
  },
});

export default heroSlice.reducer;
