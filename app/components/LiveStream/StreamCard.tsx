import React from 'react';
import Image from 'next/image';

interface StreamCardProps {
  title: string;
  artist: string;
  listeners: number;
  imageUrl: string;
}

export default function StreamCard({ title, artist, listeners, imageUrl }: StreamCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={`${artist} - ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{artist}</p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>🎧 {listeners.toLocaleString()} listening</span>
        </div>
      </div>
    </div>
  );
}