'use client';

import { UserCircleIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';

export default function NearbyUsers() {
  const nearbyUsers = [
    { id: 1, name: 'Alex', distance: '0.5km', listening: 'Bohemian Rhapsody' },
    { id: 2, name: 'Sarah', distance: '1.2km', listening: 'Hotel California' },
    { id: 3, name: 'Mike', distance: '2.0km', listening: 'Sweet Child O\' Mine' },
    { id: 4, name: 'Emma', distance: '2.5km', listening: 'Stairway to Heaven' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Nearby Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {nearbyUsers.map((user) => (
          <div
            key={user.id}
            className="bg-purple-900/20 rounded-lg p-4 hover:bg-purple-900/30 transition-colors"
          >
            <div className="flex items-center space-x-3 mb-3">
              <UserCircleIcon className="w-10 h-10 text-purple-400" />
              <div>
                <h3 className="font-medium text-white">{user.name}</h3>
                <p className="text-sm text-gray-400">{user.distance} away</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MusicalNoteIcon className="w-4 h-4" />
              <span>{user.listening}</span>
            </div>
            <button className="mt-3 w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}