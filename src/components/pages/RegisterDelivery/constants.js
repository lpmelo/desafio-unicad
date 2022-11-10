export const cepError = {
  content: "Por favor, insira o cep corretamente",
  pointing: "below",
};

export const formInitialState = {
  clientName: "",
  deliveryDate: "",
  cep: "",
  uf: "",
  city: "",
  district: "",
  address: "",
  number: "",
  complement: "",
};

export const requiredFields = [
  "clientName",
  "deliveryDate",
  "cep",
  "uf",
  "district",
  "address",
  "number",
  "complement",
];

export const validateFields = (fieldId, fieldValue) => {
  const fieldsId = {
    clientName: () => genericValidation(fieldValue),
    cep: () => validateCep(fieldValue),
    uf: () => genericValidation(fieldValue),
    city: () => genericValidation(fieldValue),
    district: () => genericValidation(fieldValue),
    address: () => genericValidation(fieldValue),
    number: () => genericValidation(fieldValue),
  };
  const fieldValidate = fieldsId[fieldId];
  return fieldValidate();
};

const validateCep = (value) => {
  if (value.length < 8) {
    return true;
  }
  return false;
};

const genericValidation = (value) => {
  if (!value.length) {
    return true;
  }
  return false;
};
