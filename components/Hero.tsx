'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Listen Together, Connect Through Music
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Share your favorite songs and discover new music with friends in real-time
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-purple-600 bg-white rounded-full hover:bg-purple-50 transition-colors"
          >
            Start Listening
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}