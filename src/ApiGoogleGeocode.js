import axios from "axios";

export const getGeocode = async (zipcode) => {
  try {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
      {}
    );

    if (res.data) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
