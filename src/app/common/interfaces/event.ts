export interface EventData {
  id: string;
  name: string;
  description: string;
  location: string;
  type: 'sport' | 'music';
}

export interface SportEvent extends EventData {
  type: 'sport';
  participants: number;
}

export interface MusicEvent extends EventData {
  type: 'music';
  genre: string;
}

export type EventAppType = SportEvent | MusicEvent;