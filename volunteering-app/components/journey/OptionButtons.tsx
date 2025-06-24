export default function OptionButtons({ options, onSelect }: { options: string[]; onSelect: (opt: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
