export type PinType = 'place' | 'photo' | 'outfit' | 'review' | 'article';

export interface User {
  id: string;
  name: string;
  avatar: string;
  username: string;
}

export interface Pin {
  id: string;
  type: PinType;
  title: string;
  description?: string;
  image: string;
  author: User;
  likes: number;
  saves: number;
  link?: string; // Booking, Airbnb, etc.
  location?: string;
  tags: string[];
}

export interface Trip {
  id: string;
  name: string;
  coverImage: string;
  destination: string;
  startDate: string;
  endDate: string;
  pins: string[]; // pin ids
  bookings?: { label: string; url: string }[];
}
