const baseURL = process.env.DB_HOST;

async function getData(path: string) {
  const res = await fetch(`${baseURL}/${path}`, { method: "GET" });

  if (res.status !== 200) {
    // throw new Error("Failed to fetch data");
    console.log("error");
  }

  return res.json();
}

const getDataForClient = async (path: string) => {
  try {
    const response = await fetch(
      `https://medifastlinkbe-production.up.railway.app/api/customer/${path}`,
      { method: "GET" }
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

export { getData, getDataForClient };
