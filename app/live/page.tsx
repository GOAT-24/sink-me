import React from 'react';
import FeaturedStream from '../components/LiveStream/FeaturedStream';
import StreamCard from '../components/LiveStream/StreamCard';

export default function LivePage() {
  const featuredStream = {
    title: "Friday Night Live Session",
    artist: "DJ Harmony",
    description: "Join our weekly live session featuring the best electronic music and special guest appearances.",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
  };

  const liveStreams = [
    {
      title: "Jazz & Soul",
      artist: "Miles Carter",
      listeners: 1234,
      imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&q=80",
    },
    {
      title: "Electronic Vibes",
      artist: "Luna Beat",
      listeners: 856,
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    },
    {
      title: "Acoustic Session",
      artist: "Sarah Woods",
      listeners: 647,
      imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80",
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8">Live Streams</h1>
        
        <section className="mb-12">
          <FeaturedStream {...featuredStream} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Popular Live Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveStreams.map((stream, index) => (
              <StreamCard key={index} {...stream} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}