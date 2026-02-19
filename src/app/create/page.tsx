'use client';

import { useState } from 'react';
import { ImagePlus, MapPin, Shirt, Star, FileText, Camera } from 'lucide-react';
import type { PinType } from '@/types';

const types: { value: PinType; label: string; icon: typeof ImagePlus }[] = [
  { value: 'place', label: 'Lieu', icon: MapPin },
  { value: 'photo', label: 'Photo inspo', icon: Camera },
  { value: 'outfit', label: 'Tenue', icon: Shirt },
  { value: 'review', label: 'Avis / hébergement', icon: Star },
  { value: 'article', label: 'Article / guide', icon: FileText },
];

export default function CreatePage() {
  const [selectedType, setSelectedType] = useState<PinType>('place');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-semibold text-ink mb-2">
        Créer une publication
      </h1>
      <p className="text-stone mb-8">
        Partage un lieu, une photo, une tenue, un avis ou un article.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-ink mb-2">Type</label>
        <div className="flex flex-wrap gap-2">
          {types.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => setSelectedType(value)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-colors ${
                selectedType === value
                  ? 'border-terracotta bg-terracotta/10 text-terracotta'
                  : 'border-sand text-stone hover:border-stone hover:text-ink'
              }`}
            >
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-ink mb-2">Image</label>
        <div className="aspect-[3/4] max-h-80 rounded-2xl border-2 border-dashed border-sand flex flex-col items-center justify-center text-stone cursor-pointer hover:border-terracotta hover:text-terracotta transition-colors">
          <ImagePlus className="w-12 h-12 mb-2" />
          <span>Clique ou glisse une image</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Titre *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ex. Meilleur spot sunset à Santorini"
            className="w-full px-4 py-3 rounded-xl border border-sand bg-white text-ink placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Description (optionnel)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ton conseil, ton avis..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-sand bg-white text-ink placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta resize-none"
          />
        </div>
        {(selectedType === 'review' || selectedType === 'place') && (
          <div>
            <label className="block text-sm font-medium text-ink mb-1">Lien résa (Booking, Airbnb…)</label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-xl border border-sand bg-white text-ink placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta"
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Lieu (ville, pays)</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="ex. Santorini, Grèce"
            className="w-full px-4 py-3 rounded-xl border border-sand bg-white text-ink placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta"
          />
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          className="flex-1 py-3 rounded-xl bg-terracotta text-white font-medium hover:bg-terracotta/90 transition-colors"
        >
          Publier
        </button>
        <button
          type="button"
          className="px-6 py-3 rounded-xl border border-sand text-stone hover:bg-sand/50 transition-colors"
        >
          Brouillon
        </button>
      </div>
    </div>
  );
}
