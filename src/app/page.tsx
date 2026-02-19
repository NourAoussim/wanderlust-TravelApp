import { pins } from '@/data/mock';
import { PinCard } from '@/components/PinCard';

export default function FeedPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">
          Découvre & inspire-toi
        </h1>
        <p className="mt-2 text-stone">
          Lieux, tenues, photos, avis et articles par la communauté.
        </p>
      </div>

      {/* Filter pills — could become client component with state */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['Tout', 'Lieux', 'Photos', 'Tenues', 'Avis', 'Articles'].map((label) => (
          <button
            key={label}
            type="button"
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              label === 'Tout'
                ? 'bg-terracotta text-white'
                : 'bg-sand/60 text-stone hover:bg-sand hover:text-ink'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="masonry">
        {pins.map((pin) => (
          <PinCard key={pin.id} pin={pin} />
        ))}
      </div>
    </div>
  );
}
