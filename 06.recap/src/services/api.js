import axios from "axios";

const BASE_URL = "https://northwind.vercel.app/api";

export const getData = async (endpoint) => {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteData = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const addData = async (endpoint, obj) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, obj);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
export const updateData = async (endpoint, obj, id) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${endpoint}/${id}`, obj);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
