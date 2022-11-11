import axios from "axios";

export const postNewDelivery = async (
  id,
  clientName,
  deliveryDate,
  cep,
  uf,
  city,
  district,
  address,
  number,
  complement
) => {
  try {
    const res = await axios.post(
      `https://unicad-desafio-fullstack-api.herokuapp.com/deliveries`,
      {
        clientName,
        deliveryDate,
        cep,
        uf,
        city,
        district,
        address,
        number,
        complement,
      },
      {
        headers: {
          id,
        },
      }
    );

    if (res.data) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAllDeliveries = async () => {
  try {
    const res = await axios.get(
      `https://unicad-desafio-fullstack-api.herokuapp.com/deliveries`,
      {}
    );

    if (res.data) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
