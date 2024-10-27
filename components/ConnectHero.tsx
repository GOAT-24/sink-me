'use client';

import { UserGroupIcon } from '@heroicons/react/24/outline';

export default function ConnectHero() {
  return (
    <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-lg p-8 mb-8">
      <div className="flex items-center space-x-4 mb-6">
        <UserGroupIcon className="w-8 h-8 text-purple-400" />
        <h1 className="text-3xl font-bold text-white">Connect & Listen</h1>
      </div>
      <p className="text-lg text-gray-300 max-w-2xl">
        Find nearby music lovers and start sharing your favorite tracks. Create or join listening sessions 
        and experience music together in real-time.
      </p>
    </div>
  );
}