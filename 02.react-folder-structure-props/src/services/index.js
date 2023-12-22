import axios from "axios";

const BASE_URL = "https://northwind.vercel.app/api";

export async function getAllData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  //   return response.data;
  console.log(response.data);
}
