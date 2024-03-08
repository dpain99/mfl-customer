import { store } from "@/redux/store";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const token = store.getState().authenSlice.accessToken;

async function getData(path: string) {
  const res = await fetch(`${baseURL}/${path}`, { method: "GET" });

  if (res.status !== 200) {
    console.log("error");
  }

  return res.json();
}

const getDataForClient = async (path: string, accessToken?: string) => {
  const headers: HeadersInit = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }
  try {
    const response = await fetch(
      `https://medifastlinkbe-production.up.railway.app/api/customer/${path}`,
      {
        method: "GET",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const postDataForClient = async (path: string, data: any) => {
  try {
    const headers: HeadersInit = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
      console.log("token", token);
    }

    const response = await fetch(
      `https://medifastlinkbe-production.up.railway.app/api/customer/${path}`,
      {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      console.log("token", token);
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    console.log("token", token);
    throw error;
  }
};

export { getData, getDataForClient, postDataForClient };
