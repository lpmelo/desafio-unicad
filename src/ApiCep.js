import axios from "axios";

export const getCep = async (cep) => {
  try {
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json`, {});

    if (res.data) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
