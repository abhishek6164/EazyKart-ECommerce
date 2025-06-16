import { createSlice } from "@reduxjs/toolkit";
// userSlice.jsx
const initialState = {
  user: null, // 👈 also change to singular
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.user = action.payload;
    },
    removeuser: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { loaduser , removeuser  } = userSlice.actions;
