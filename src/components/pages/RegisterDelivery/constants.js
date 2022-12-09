export const cepError = {
  content: "Por favor, insira o cep corretamente",
  pointing: "below",
};

export const formInitialState = {
  formData: {
    clientName: "",
    deliveryDate: "",
    cep: "",
    uf: "",
    city: "",
    district: "",
    address: "",
    number: "",
    complement: "",
  },
  messages: {},
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

export const validateFields = (fieldId, fieldValue) => {
  const fieldsId = {
    clientName: () => genericValidation(fieldValue),
    deliveryDate: () => genericValidation(fieldValue),
    cep: () => validateCep(fieldValue),
    uf: () => genericValidation(fieldValue),
    city: () => genericValidation(fieldValue),
    district: () => genericValidation(fieldValue),
    address: () => genericValidation(fieldValue),
    number: () => genericValidation(fieldValue),
  };

  const fieldValidate =
    Object.keys(fieldsId).includes(fieldId) && fieldsId[fieldId];

  return fieldValidate ? fieldValidate() : false;
};

export const fieldsWithErrors = (allFieldIds, state) => {
  let errorFields = [];
  let formattedFieldError = {};

  allFieldIds.map((fieldId) => {
    if (validateFields(fieldId, state[fieldId])) {
      errorFields.push(fieldId);
    }
  });

  errorFields.map((error) => {
    formattedFieldError = {
      ...formattedFieldError,
      [error]: `Campo Obrigatório`,
    };
  });

  return formattedFieldError;
};
