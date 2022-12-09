import { createSlice } from "@reduxjs/toolkit";
import { formInitialState } from "../constants";

export const registerDeliverySlice = createSlice({
  name: "registerDeliveryReducer",
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
      state.formData[action.payload.field] = action.payload.changedValue;
    },
    clearState: (state, action) => {
      state.formData.clientName = action.payload;
      state.formData.deliveryDate = action.payload;
      state.formData.cep = action.payload;
      state.formData.uf = action.payload;
      state.formData.city = action.payload;
      state.formData.district = action.payload;
      state.formData.address = action.payload;
      state.formData.number = action.payload;
      state.formData.complement = action.payload;
    },
    changeMessages: (state, action) => {
      state.messages = action.payload;
    },
    clearMessages: (state, action) => {
      state.messages = {};
    },
  },
});

export const {
  changeValue,
  saveGetResponse,
  clearState,
  changeMessages,
  clearMessages,
} = registerDeliverySlice.actions;
export const registerDeliveryReducer = registerDeliverySlice.reducer;
