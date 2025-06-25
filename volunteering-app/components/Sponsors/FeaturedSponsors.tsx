'use client';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import Link from 'next/link';

const sponsors = [
  {
    name: 'Nagarro',
    image: '/sponsors/sponsor1.jpg',
    website: 'https://www.nagarro.com/en/',
  },
  {
    name: 'Nagarro',
    image: '/sponsors/sponsor2.jpg',
    website: 'https://www.nagarro.com/en/',
  },
  {
    name: 'Nagarro',
    image: '/sponsors/sponsor3.jpg',
    website: 'https://www.nagarro.com/en/',
  },
];

export default function FeaturedSponsors() {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Featured Sponsors
      </h2>

      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="max-w-3xl mx-auto"
      >
        {sponsors.map((sponsor, index) => (
          <div key={index} className="relative">
            <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={600}
                height={300}
                className="object-contain mx-auto rounded-lg"
              />
              <p className="legend">{sponsor.name}</p>
            </Link>
          </div>
        ))}
      </Carousel>

      <div className="mt-8">
        <Link href="/sponsorship" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Become a Sponsor
        </Link>
      </div>
    </section>
  );
}
