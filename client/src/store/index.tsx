import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  signIn: false,
  user: {},
};

const counterSlice = createSlice({
  name: "addingData",
  initialState,
  reducers: {
    SetSignIn(state, action) {
      state.signIn = action.payload;
    },
    SetUser(state, action) {
      state.user = action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
