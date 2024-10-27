'use client';

export default function NearbyListeners() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-white mb-4">Nearby Listeners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-purple-900/30 p-4 rounded-lg hover:bg-purple-900/40 transition-colors"
          >
            <div className="w-12 h-12 bg-purple-600 rounded-full mb-3"></div>
            <h3 className="font-medium text-white">User {i}</h3>
            <p className="text-sm text-gray-300">Listening to: Song Name</p>
          </div>
        ))}
      </div>
    </div>
  );
}