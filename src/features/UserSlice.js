import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // Reducer escucha si le llega info a una capa
  // state = estado de user | action = info inyectada en la capa
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// El selector sirve para consultar y consumir el estado de la variable
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
