import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    location: "",
    equipment: "",
    type: "",
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
    changeEquipment(state, action) {
      state.equipment = action.payload;
    },
    changeType(state, action) {
      state.type = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeLocation, changeEquipment, changeType } =
  filterSlice.actions;
