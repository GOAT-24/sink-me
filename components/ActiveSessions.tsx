'use client';

import { RadioIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ActiveSessions() {
  const sessions = [
    { 
      id: 1, 
      name: 'Rock Classics', 
      host: 'David', 
      listeners: 8, 
      duration: '45min',
      currentSong: 'Sweet Home Alabama'
    },
    { 
      id: 2, 
      name: 'Chill Vibes', 
      host: 'Lisa', 
      listeners: 12, 
      duration: '1h 20min',
      currentSong: 'Lofi Study Beat'
    },
    { 
      id: 3, 
      name: '80s Mix', 
      host: 'John', 
      listeners: 15, 
      duration: '2h',
      currentSong: 'Take On Me'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Active Sessions</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-lg p-6 hover:from-purple-900/30 hover:to-indigo-900/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <RadioIcon className="w-6 h-6 text-purple-400" />
                <h3 className="font-medium text-white">{session.name}</h3>
              </div>
              <span className="text-sm text-purple-400">Live</span>
            </div>
            
            <p className="text-sm text-gray-300 mb-4">
              Currently Playing: {session.currentSong}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
              <div className="flex items-center space-x-2">
                <UsersIcon className="w-4 h-4" />
                <span>{session.listeners} listening</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-4 h-4" />
                <span>{session.duration}</span>
              </div>
            </div>
            
            <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              Join Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}