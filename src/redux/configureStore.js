import { configureStore } from '@reduxjs/toolkit';

import greetingSlice from './greeting/greeting';

const store = configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});
export default store;
