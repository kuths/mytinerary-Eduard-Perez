import { createReducer } from "@reduxjs/toolkit";
import { changeSearch, setCities } from "../actions/cityActions";

const initialState = {
  city: [],
  search: "",
};

export const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSearch, (state, action) => {
      state.search = action.payload;
    })
    .addCase(setCities, (state, action) => {
      state.city = action.payload;
    });
});



