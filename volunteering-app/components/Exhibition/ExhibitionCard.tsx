import Image from 'next/image';
import Link from 'next/link';

interface ExhibitionCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ExhibitionCard({ id, title, description, imageUrl }: ExhibitionCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
        <Link 
          href='https://www.nagarro.com/en/'
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
