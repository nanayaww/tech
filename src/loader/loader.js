export const loader = async () => {
  const brandsPromise = fetch("http://localhost:3000/brands");
  const phonesPromise = fetch("http://localhost:3000/phones");

  const [brandsRes, phonesRes] = await Promise.all([
    brandsPromise,
    phonesPromise,
  ]);

  const [brands, phones] = await Promise.all([
    brandsRes.json(),
    phonesRes.json(),
  ]);

  return { brands, phones };
};

export const productDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/phones/${id}`);
  return res.json();
};
