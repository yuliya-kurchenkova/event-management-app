import { Injectable, signal } from "@angular/core";
import { eventData } from "../mock-data/event-data";
import { EventData } from "../interfaces/event";


@Injectable({
  providedIn: 'root'
})

export class EventService {
  private _events = signal<EventData[]>(eventData);
  public events = this._events.asReadonly();

  public addEvent(event: EventData) {
    this._events.update(list => [...list, event]);
  }

  public updateEvent(event: EventData) {
    this._events.update(list => list.map(e => e.id === event.id ? event : e));
  }

  public deleteEvent(id: string) {
    this._events.update(list => list.filter(e => e.id !== id));
  }

}