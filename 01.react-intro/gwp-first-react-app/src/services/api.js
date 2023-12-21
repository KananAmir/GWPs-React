import axios from "axios";

export async function getAllData() {
  let res = await axios("https://northwind.vercel.app/api/suppliers");

  console.log(res.data);
}


