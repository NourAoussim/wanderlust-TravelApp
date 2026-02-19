'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, MapPin, PlusCircle, User } from 'lucide-react';

const links = [
  { href: '/', label: 'Feed', icon: Compass },
  { href: '/trips', label: 'Mes voyages', icon: MapPin },
  { href: '/create', label: 'Créer', icon: PlusCircle },
  { href: '/profile', label: 'Profil', icon: User },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="font-display text-2xl font-semibold text-ink">
          Wanderlust
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`nav-pill ${pathname === href ? 'active' : ''}`}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
