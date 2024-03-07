const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export function fetchInstant<TResponse>(
  url: string,
  config: RequestInit = {},
  token?: string
): Promise<TResponse> {
  return fetch(`${baseURL}/${url}`, {
    ...config,
    headers: {
      ...config.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data as TResponse);
}
