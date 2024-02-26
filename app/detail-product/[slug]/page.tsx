export default function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  return <div className="pt-52">My Post: {params.slug}</div>;
}
