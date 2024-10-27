'use client';

import { useState } from 'react';
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon } from '@heroicons/react/24/solid';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-600 rounded"></div>
          <div>
            <h3 className="font-medium">Currently Playing</h3>
            <p className="text-sm text-gray-300">Artist Name</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-purple-300">
            <BackwardIcon className="w-5 h-5" />
          </button>
          <button 
            className="p-3 bg-white text-purple-600 rounded-full hover:bg-purple-50"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6" />
            )}
          </button>
          <button className="p-2 hover:text-purple-300">
            <ForwardIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div className="w-96">
          <div className="bg-gray-600 h-1 rounded-full">
            <div className="bg-purple-500 w-1/3 h-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}