import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETGREETING = 'hello-rails-react/GET_GREETING';

const BASE_URL = 'http://127.0.0.1:3000/api/greetings';

export const getGreeting = createAsyncThunk(
  GETGREETING,
  async () => {
    const response = await fetch(BASE_URL);
    const item = await response.json();
    return (item);
  },
);

const initialState = {
  message: 'Error Message',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [getGreeting.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload,
    }),
  },
});

export const { pushedGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;
