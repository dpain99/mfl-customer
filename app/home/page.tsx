import SlideCarousel from "../components/slides/page";
import CardProduct from "./product-card/page";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center pt-24">
      <SlideCarousel />
      <h1 className="text-4xl font-semibold">Product</h1>
      <span>Order It</span>
      <CardProduct title={"San pham 1"} />
    </div>
  );
}
