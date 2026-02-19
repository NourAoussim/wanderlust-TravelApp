import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { trips, pins } from '@/data/mock';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function TripDetailPage({ params }: { params: { id: string } }) {
  const trip = trips.find((t) => t.id === params.id);
  if (!trip) notFound();

  const tripPins = pins.filter((p) => trip.pins.includes(p.id));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
        <Image src={trip.coverImage} alt={trip.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h1 className="font-display text-3xl font-semibold">{trip.name}</h1>
          <p className="flex items-center gap-2 mt-2 text-white/90">
            <MapPin className="w-5 h-5" /> {trip.destination}
          </p>
          <p className="flex items-center gap-2 mt-1 text-white/80">
            <Calendar className="w-5 h-5" />
            {new Date(trip.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
            – {new Date(trip.endDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="font-display text-xl font-semibold text-ink mb-4">Réservations & liens</h2>
        <ul className="space-y-2">
          {trip.bookings?.map((b) => (
            <li key={b.label}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-4 rounded-xl bg-sand/50 hover:bg-sand text-ink"
              >
                {b.label} <ExternalLink className="w-4 h-4 text-terracotta" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-ink mb-4">Pins sauvegardés pour ce trip</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tripPins.map((pin) => (
            <Link key={pin.id} href={`/pin/${pin.id}`} className="block rounded-xl overflow-hidden aspect-[3/4] relative group">
              <Image src={pin.image} alt={pin.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                {pin.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <Link href="/trips" className="text-terracotta font-medium hover:underline">
          ← Retour à mes voyages
        </Link>
      </div>
    </div>
  );
}
