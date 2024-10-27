import React from 'react';
import Image from 'next/image';

interface FeaturedStreamProps {
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
}

export default function FeaturedStream({ title, artist, description, imageUrl }: FeaturedStreamProps) {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl overflow-hidden">
      <div className="relative h-96 w-full">
        <Image
          src={imageUrl}
          alt={`${artist} - ${title}`}
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-xl mb-4">{artist}</p>
          <p className="text-gray-200 max-w-2xl">{description}</p>
          <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Join Stream
          </button>
        </div>
      </div>
    </div>
  );
}