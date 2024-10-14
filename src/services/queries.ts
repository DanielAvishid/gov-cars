import useSWR from "swr";

export function useCars(limit: number) {
  return useSWR<any>(
    `3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=${limit}`
  );
}
