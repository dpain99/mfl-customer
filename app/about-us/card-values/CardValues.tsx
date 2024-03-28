import "./style.scss";
interface ICardWaterProps {
  title: string;
}
export default function CardWater({ title }: ICardWaterProps) {
  return (
    <div className="card-water flex items-center justify-center p-12">
      <span className="font-semibold text-secondary-color">{title}</span>
    </div>
  );
}
