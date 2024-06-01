interface DividerProps {
  direction?: string;
  width?: string;
  height?: string;
}
export default function Divider({ direction, width, height }: DividerProps) {
  return <div className={`w-px h-5 text-black bg-black`}></div>;
}
