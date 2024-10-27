import NearbyUsers from '@/components/NearbyUsers';
import ConnectHero from '@/components/ConnectHero';
import ActiveSessions from '@/components/ActiveSessions';

export default function Connect() {
  return (
    <div className="px-6 py-4">
      <ConnectHero />
      <NearbyUsers />
      <ActiveSessions />
    </div>
  );
}