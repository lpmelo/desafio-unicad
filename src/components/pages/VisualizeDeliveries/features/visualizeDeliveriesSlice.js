import { createSlice } from "@reduxjs/toolkit";
import { formInitialState } from "../constants";

export const visualizeDeliveriesSlice = createSlice({
  name: "visualizeDeliveriesReducer",
  initialState: formInitialState,
  reducers: {
    saveGetResponse: (state, action) => {
      state.uf = action.payload.uf;
      state.city = action.payload.localidade;
      state.district = action.payload.bairro;
      state.address = action.payload.logradouro;
      state.complement = action.payload.complemento;
    },
    changeValue: (state, action) => {
      state[action.payload.field] = action.payload.changedValue;
    },
    clearState: (state, action) => {
      state.clientName = action.payload;
      state.deliveryDate = action.payload;
      state.cep = action.payload;
      state.uf = action.payload;
      state.city = action.payload;
      state.district = action.payload;
      state.address = action.payload;
      state.number = action.payload;
      state.complement = action.payload;
    },
  },
});

export const { changeValue, saveGetResponse, clearState } =
  visualizeDeliveriesSlice.actions;
export const visualizeDeliveriesReducer = visualizeDeliveriesSlice.reducer;
