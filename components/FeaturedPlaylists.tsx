'use client';

export default function FeaturedPlaylists() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-white mb-4">Featured Playlists</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="group relative aspect-square bg-purple-900/30 rounded-lg overflow-hidden hover:bg-purple-900/40 transition-colors"
          >
            <div className="absolute inset-0 flex items-end p-4">
              <div>
                <h3 className="font-medium text-white">Playlist {i}</h3>
                <p className="text-sm text-gray-300">Created by User {i}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}