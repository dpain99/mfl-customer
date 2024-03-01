import "./style.scss";
interface MyBtnProps {
  title: string;
}
export default function MyBtn({ title }: MyBtnProps) {
  return (
    <button className="my-button">
      <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{title}</span>
      </span>
    </button>
  );
}
