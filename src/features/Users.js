import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  id: "0",
  name: "",
  username: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialValues },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialValues;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
