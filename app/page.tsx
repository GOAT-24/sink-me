import FeaturedPlaylists from '@/components/FeaturedPlaylists';
import Hero from '@/components/Hero';
import NearbyListeners from '@/components/NearbyListeners';

export default function Home() {
  return (
    <div className="px-6 py-4">
      <Hero />
      <NearbyListeners />
      <FeaturedPlaylists />
    </div>
  );
}