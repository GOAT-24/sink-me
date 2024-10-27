import React from 'react';

export default function LibraryPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Music Library</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for library content */}
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-neutral-800">
            <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Create and manage your playlists here
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-neutral-800">
            <h2 className="text-xl font-semibold mb-4">Liked Songs</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Access your favorite tracks
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-neutral-800">
            <h2 className="text-xl font-semibold mb-4">Recent Plays</h2>
            <p className="text-gray-600 dark:text-gray-300">
              View your recently played tracks
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}