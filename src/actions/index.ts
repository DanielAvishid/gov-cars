"use server";

import axios from "axios";

let counter = 0;

export async function getCars(limit: number) {
  try {
    const resp = await axios.post(
      `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=${limit}`,
      { count: counter }
    );
    return resp;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getCar(carNumber: number) {
  try {
    const resp = await axios.post(
      `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${carNumber}`
    );
    return resp.data.result.records;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
