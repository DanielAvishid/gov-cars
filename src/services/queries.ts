import useSWR from "swr";

export function getCars(limit: number, offset: number) {
  return useSWR<any>(
    `3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=${limit}&offset=${offset}`
  );
}

export function getCar(misparRechev: string) {
  let limit = 0;
  if (misparRechev) {
    limit = 1;
  }
  return useSWR<any>(
    `3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${misparRechev}&limit=${limit}`
  );
}
