export interface CardProps {
    cost: number;
    type: string;
    description: string;
    artist: string;
    city: string;
    date: string;
    img: string;
    id: string;
  }

export interface event {
  cost:number;
  type: string;
  description: string;
  artist: string;
  city: string;
  date: string;
  img: string;
  id: string;
}

export interface category {
  id: number;
  name: string;
  description: string;
  icon: string;
  iconType: string;
}

export interface ticketProps {
  id: number;
  name: string;
  artist: string;
  date: string;
  hour: string;
  status: 'Active' | 'in Progress' | 'Finalized';
  img: string;
  link: string | undefined;
  type: 'online' | 'physical';
  address: string | undefined;
  city: string | undefined;

}

export interface couponProps {
  id: number;
  code:string;
  name: string;
  description: string;
  date: string;
  hour:string;
  status: 'Active' | 'in Progress' | 'Finalized';
  img: string;
  type: '2x1' | '3x2' | 'free' | number;
  eventType: 'online' | 'physical';
  quantity: number;
  validUntil: string;

}
export  interface PropsUser {
  name: string;
  img: string;
  email: string;
  birthday: string;
  telephone: string;
}