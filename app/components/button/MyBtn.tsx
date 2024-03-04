import "./style.scss";
interface MyBtnProps {
  title: string;
  onClick?: () => void;
}
export default function MyBtn({ title, onClick }: MyBtnProps) {
  return (
    <button className="my-button" onClick={onClick}>
      <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{title}</span>
      </span>
    </button>
  );
}
