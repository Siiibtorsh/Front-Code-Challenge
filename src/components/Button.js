export default function Button({ text, ...arg }) {
  return (
    <button
      className="p-3 bg-brand-200 rounded-md text-white font-semibold text-xl hover:scale-105 transition-transform"
      {...arg}
    >
      {text}
    </button>
  );
}
