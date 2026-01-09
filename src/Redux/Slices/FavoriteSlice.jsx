import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favs: JSON.parse(localStorage.getItem("favourite")) || [],
  },
  reducers: {
    addfav: (state, action) => {
      const exists = state.favs.some(
        (food) => food.id === action.payload.id
      );

      if (!exists) {
        state.favs.push(action.payload);
        localStorage.setItem("favourite", JSON.stringify(state.favs));
      }
    },

    removefav: (state, action) => {
      state.favs = state.favs.filter(
        (food) => food.id !== action.payload
      );
      localStorage.setItem("favourite", JSON.stringify(state.favs));
    },

    resetfav: (state) => {
      state.favs = [];
      localStorage.removeItem("favourite");
    },
  },
});

export const { addfav, removefav, resetfav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
