const baseURL = process.env.DB_HOST;

const getData = async (slug: string) => {
  const res = await fetch(`${baseURL}/${slug}`, { method: "GET" });
  const data = await res.json();
  return data;
};

export { getData };
