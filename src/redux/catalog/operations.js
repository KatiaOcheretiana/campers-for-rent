import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65faa53a3909a9a65b1b03e0.mockapi.io/adverts";

export const getCampers = createAsyncThunk(
  "catalog/getCampers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
