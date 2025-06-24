'use client';

import ExhibitionCard from './ExhibitionCard';

const exhibitions = [
  {
    id: 'e1',
    title: 'Green Future Expo',
    description: 'An event showcasing green technologies and eco-innovations.',
    imageUrl: '/exhibitions/expo1.jpg',
  },
  {
    id: 'e2',
    title: 'Health Awareness Week',
    description: 'Join hands for promoting health & hygiene across communities.',
    imageUrl: '/exhibitions/expo2.jpg',
  },
  {
    id: 'e3',
    title: 'Education for All',
    description: 'Promoting education for underprivileged children.',
    imageUrl: '/exhibitions/expo3.jpg',
  },
];

export default function FeaturedExhibitions() {
  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Featured Exhibitions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {exhibitions.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} {...exhibition} />
        ))}
      </div>
    </section>
  );
}
