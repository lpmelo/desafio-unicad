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
      `http://localhost:8000/deliveries`,
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
    const res = await axios.get(`http://localhost:8000/deliveries`, {});

    if (res.data) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
