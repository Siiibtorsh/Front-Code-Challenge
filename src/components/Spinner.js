export default function Spinner({ color }) {
  return (
    <div
      class={`animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full w-6 h-6 ${color}`}
    ></div>
  );
}
