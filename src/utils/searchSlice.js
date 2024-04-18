import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // {"ip":["iphone","iphone 11"]}  // DS
      //   state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload); // state = target and action.payload is sourceObj
      // and it will return a new target i.e., state
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
