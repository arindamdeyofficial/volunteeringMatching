import { useState } from 'react';

export default function StarRating({ onSelect }: { onSelect: (rating: number) => void }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1 my-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`cursor-pointer text-2xl ${i <= hovered ? 'text-yellow-400' : 'text-gray-400'}`}
          onClick={() => onSelect(i)}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(0)}
        >★</span>
      ))}
    </div>
  );
}
