import Image from 'next/image';
import { notFound } from 'next/navigation';
import { pins } from '@/data/mock';
import { Heart, Bookmark, MapPin, ExternalLink } from 'lucide-react';

export default function PinPage({ params }: { params: { id: string } }) {
  const pin = pins.find((p) => p.id === params.id);
  if (!pin) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-sand">
          <Image src={pin.image} alt={pin.title} fill className="object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src={pin.author.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
            <span className="text-stone">@{pin.author.username}</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-ink">{pin.title}</h1>
          {pin.location && (
            <p className="mt-2 flex items-center gap-1 text-stone">
              <MapPin className="w-4 h-4" /> {pin.location}
            </p>
          )}
          {pin.description && (
            <p className="mt-4 text-stone">{pin.description}</p>
          )}
          <div className="mt-6 flex items-center gap-4">
            <button type="button" className="flex items-center gap-2 text-stone hover:text-terracotta">
              <Heart className="w-5 h-5" /> {pin.likes}
            </button>
            <button type="button" className="flex items-center gap-2 text-stone hover:text-terracotta">
              <Bookmark className="w-5 h-5" /> Sauvegarder
            </button>
            {pin.link && (
              <a
                href={pin.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-terracotta font-medium hover:underline"
              >
                Voir le lien (résa) <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {pin.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-sand text-sm text-stone">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
