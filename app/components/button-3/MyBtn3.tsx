interface MyBtn3Props {
  title: string;
  sx?: string;
  handleClick?: () => void;
}
export default function MyBtn3({ title, sx, handleClick }: MyBtn3Props) {
  return (
    <button
      onClick={handleClick}
      className={` rounded-lg relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r  before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0 ${sx}`}
    >
      {title}
    </button>
  );
}
