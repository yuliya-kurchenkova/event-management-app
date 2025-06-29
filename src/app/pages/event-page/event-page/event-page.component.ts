import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { EventService } from '../../../common/services/event.service';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { SportEventFormComponent } from "../../../core/components/forms/sport-event-form/sport-event-form.component";
import { FormGroup } from '@angular/forms';
import { EventAppType, MusicEvent, SportEvent } from '../../../common/interfaces/event';
import { MusicEventFormComponent } from '../../../core/components/forms/music-event-form/music-event-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'e-event-page',
  imports: [
    TableModule,
    ButtonModule,
    TagModule,
    DialogModule,
    SportEventFormComponent,
    CommonModule,
    MusicEventFormComponent
],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class EventPageComponent {
  private eventService = inject(EventService);

  public events = this.eventService.events;
  public showModal = false;
  public currentEvent: EventAppType | null = null;
  public currentType: 'sport' | 'music' = 'sport';
  public currentForm!: FormGroup;

  get currentSportEvent(): SportEvent {
    return this.currentEvent as SportEvent;
  }

  get currentMusicEvent(): MusicEvent {
    return this.currentEvent as MusicEvent;
  }

  public openForm(type: 'sport' | 'music') {
    this.currentType = type;
    this.currentEvent = {
      id: crypto.randomUUID(),
      name: '', description: '', location: '', type,
      ...(type==='sport' ? {participants:0} : {genre:''})
    } as EventAppType;
    this.showModal = true;
  }

  public editEvent(event: EventAppType) {
    this.currentEvent = {...event};
    this.currentType = event.type;
    this.showModal = true;
  }

  public deleteEvent(id: string) {
    this.eventService.deleteEvent(id);
  }

  public save() {
    const formValue = this.currentForm.getRawValue();
    const updatedEvent = {
      ...this.currentEvent,
      ...formValue,
      id: this.currentEvent?.id ?? crypto.randomUUID()
    } as EventAppType;

    if (this.events().some(e => e.id === updatedEvent.id)) {
      this.eventService.updateEvent(updatedEvent);
    } else {
      this.eventService.addEvent(updatedEvent);
    }
    
    this.showModal = false;
  }
}
