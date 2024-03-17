import "./style.scss";
interface MyBtn2Props {
  title: string;
}
export default function MyBtn2({ title }: MyBtn2Props) {
  return <button className="my_button_2">{title}</button>;
}
