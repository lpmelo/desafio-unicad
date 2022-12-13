import { createSlice } from "@reduxjs/toolkit";
import { formInitialState } from "../constants";

export const registerDeliverySlice = createSlice({
  name: "registerDeliveryReducer",
  initialState: formInitialState,
  reducers: {
    saveGetResponse: (state, action) => {
      state.formData.uf = action.payload.uf;
      state.formData.city = action.payload.localidade;
      state.formData.district = action.payload.bairro;
      state.formData.address = action.payload.logradouro;
      state.formData.complement = action.payload.complemento;
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
    onSubmitFailed: (state, action) => {
      state.submitEvents.submitSuccess = false;
      state.submitEvents.submitFailed = true;
    },
    onSubmitSuccess: (state, action) => {
      state.submitEvents.submitFailed = false;
      state.submitEvents.submitSuccess = true;
    },
    clearValidations: (state, action) => {
      state.haveError = false;
      state.submitEvents.submitFailed = false;
      state.submitEvents.submitSuccess = false;
    },
  },
});

export const {
  changeValue,
  saveGetResponse,
  clearState,
  changeMessages,
  clearMessages,
  onSubmitFailed,
  onSubmitSuccess,
  clearValidations,
} = registerDeliverySlice.actions;
export const registerDeliveryReducer = registerDeliverySlice.reducer;
