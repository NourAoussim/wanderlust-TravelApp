import Image from 'next/image';
import { currentUser, pins } from '@/data/mock';
import { PinCard } from '@/components/PinCard';

const myPins = pins.filter((p) => p.author.id === currentUser.id);

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
        <img
          src={currentUser.avatar}
          alt=""
          className="w-24 h-24 rounded-full object-cover border-4 border-sand"
        />
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink">{currentUser.name}</h1>
          <p className="text-stone">@{currentUser.username}</p>
          <div className="mt-2 flex gap-4 text-sm text-stone">
            <span><strong className="text-ink">{myPins.length}</strong> publications</span>
            <span><strong className="text-ink">0</strong> abonnés</span>
            <span><strong className="text-ink">0</strong> abonnements</span>
          </div>
        </div>
      </div>

      <h2 className="font-display text-xl font-semibold text-ink mb-4">Mes publications</h2>
      <div className="masonry">
        {myPins.map((pin) => (
          <PinCard key={pin.id} pin={pin} />
        ))}
      </div>
    </div>
  );
}
