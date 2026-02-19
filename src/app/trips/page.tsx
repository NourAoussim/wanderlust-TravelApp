import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { trips } from '@/data/mock';

export default function TripsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">
          Mes voyages
        </h1>
        <p className="mt-2 text-stone">
          Organise tes prochains trips et lie tout en un endroit (Booking, Airbnb, billets).
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {trips.map((trip) => (
          <article
            key={trip.id}
            className="rounded-2xl overflow-hidden bg-white border border-sand/60 shadow-sm hover:shadow-lg transition-shadow"
          >
            <Link href={`/trips/${trip.id}`} className="block">
              <div className="relative h-48 md:h-56">
                <Image
                  src={trip.coverImage}
                  alt={trip.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="font-display text-2xl font-semibold">{trip.name}</h2>
                  <p className="flex items-center gap-1 mt-1 text-white/90">
                    <MapPin className="w-4 h-4" /> {trip.destination}
                  </p>
                  <p className="flex items-center gap-1 mt-0.5 text-sm text-white/80">
                    <Calendar className="w-4 h-4" />
                    {new Date(trip.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                    – {new Date(trip.endDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </Link>
            <div className="p-4">
              <p className="text-sm text-stone mb-3">Résas & liens</p>
              <ul className="space-y-2">
                {trip.bookings?.map((b) => (
                  <li key={b.label}>
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm text-terracotta hover:underline"
                    >
                      {b.label} <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/trips/new"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand text-ink font-medium hover:bg-sand/80 transition-colors"
        >
          + Nouveau voyage
        </Link>
      </div>
    </div>
  );
}
