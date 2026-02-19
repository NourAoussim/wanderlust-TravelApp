'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Bookmark, MapPin, ExternalLink } from 'lucide-react';
import type { Pin } from '@/types';

const typeLabels: Record<Pin['type'], string> = {
  place: 'Lieu',
  photo: 'Photo',
  outfit: 'Tenue',
  review: 'Avis',
  article: 'Article',
};

export function PinCard({ pin }: { pin: Pin }) {
  return (
    <article className="pin-card group">
      <Link href={`/pin/${pin.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-sand">
          <Image
            src={pin.image}
            alt={pin.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cream/90 text-xs font-medium text-ink backdrop-blur">
            {typeLabels[pin.type]}
          </span>
          {pin.location && (
            <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-cream/90 text-xs text-stone backdrop-blur">
              <MapPin className="w-3.5 h-3.5" /> {pin.location}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-display font-semibold text-lg text-ink line-clamp-2">{pin.title}</h3>
          {pin.description && (
            <p className="mt-1 text-sm text-stone line-clamp-2">{pin.description}</p>
          )}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-stone text-sm">
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4" /> {pin.likes}
              </span>
              <span className="flex items-center gap-1">
                <Bookmark className="w-4 h-4" /> {pin.saves}
              </span>
            </div>
            {pin.link && (
              <a
                href={pin.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-terracotta text-sm font-medium hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Réserver <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <img
              src={pin.author.avatar}
              alt=""
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-stone">@{pin.author.username}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
