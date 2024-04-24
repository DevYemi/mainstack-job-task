export const fetchBaseUrl = "https://fe-task-api.mainstack.io";

/**
* @Desc: This is a function that is primarily passed to `useSwr as a fetcher`.

* @Params {string} api: This is the endpoint to access the route handler endpoint defined.
*/
export async function swrFetcher<T>(api: string) {
  const res = await fetch(api, { method: "GET" });

  // Throw an error for swr to catch if there are any error from the request
  if (!res.ok) {
    const resData = await res.json();
    throw new Error(
      JSON.stringify({
        ...resData,
        statusCode: res.status,
      }),
    );
  }
  const data: T = await res.json();

  return data;
}

export type SwrMutationFetcherArgType<T = unknown> = {
  requestOption: RequestInit;
  searchParams?: T;
};

/**
* @Desc: This is a function that is primarily passed to `useSWRMutation as a fetcher`.

* @Params {string} api: This is the endpoint to access the route handler endpoint defined.
* @Params {SwrMutationFetcherArgType} arg: Extra data passed to help customize the request.
*/
export async function swrMutationFetcher(
  api: string,
  { arg }: { arg?: SwrMutationFetcherArgType },
) {
  // Check if there are any searchParams passed anad try to include it in the fetch api string
  const searchParams = new URLSearchParams(arg?.searchParams as any);
  const searchParamsString = arg?.searchParams
    ? `?${searchParams.toString()}`
    : "";

  // Make fetch
  const res = await fetch(`${api}${searchParamsString}`, arg?.requestOption);

  // Throw an error for swr to catch if there are any error from the request
  if (!res.ok) {
    const resData = await res.json();
    throw new Error(
      JSON.stringify({
        ...resData,
        statusCode: res.status,
      }),
    );
  }
  const resData = await res.json();

  return resData.data;
}

/**
* @Desc: This is a function that helps parse the error gotten from `swr` and returns it in a typed object format.

* @Params {any} e: A request error
*/
export function parseClientError(e: any) {
  try {
    const errorObject = JSON.parse(e?.message);

    return errorObject;
  } catch (error: any) {
    return error;
  }
}
