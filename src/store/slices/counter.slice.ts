import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (_state) => {
      const state = _state;
      state.value += 1;
    },
    decrement: (_state) => {
      const state = _state;
      state.value -= 1;
    },
    incrementByAmount: (_state, _action: PayloadAction<number>) => {
      const state = _state;
      state.value += _action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (_state: RootState) => _state.counter.value;

export default counterSlice.reducer;
