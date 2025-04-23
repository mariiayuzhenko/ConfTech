import { Component } from '@angular/core';
import { ConferenceEvent } from 'src/app/models/conference-event.model';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent {
  events: ConferenceEvent[] = [
    {
      title: 'Opening Keynote',
      type: 'Keynote',
      date: 'April 24, 2025',
      time: '09:00 AM',
      speaker: 'Dr. Jane Smith',
      location: 'Main Hall',
      description: 'Kickoff the conference with inspiring insights.',
      bookmarks: 5
    },
    {
      title: 'Future of AI',
      type: 'Talk',
      date: 'April 24, 2025',
      time: '11:00 AM',
      speaker: 'John AIson',
      location: 'Room 2A',
      description: 'Exploring trends in AI and ML.',
      bookmarks: 8
    }
  ];
}
