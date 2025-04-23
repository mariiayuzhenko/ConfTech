import { Component, Input } from '@angular/core';
import { ConferenceEvent } from 'src/app/models/conference-event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() event!: ConferenceEvent;
}
