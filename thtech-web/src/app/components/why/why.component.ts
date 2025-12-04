import { Component } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';

type Reason = {
  title: string;
  description: string;
  icon: 'person' | 'target' | 'bolt';
};

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase],
  templateUrl: './why.component.html',
  styleUrl: './why.component.scss',
})
export class WhyComponent {
  reasons: Reason[] = [
    {
      title: 'Persönlicher Ansprechpartner',
      description: 'Du sprichst immer direkt mit mir. Kein Ticket-Chaos, kein Support-Labyrinth.',
      icon: 'person',
    },
    {
      title: 'Kleine Lösungen, grosse Wirkung',
      description: 'Ich entwickle nur das, was dir wirklich hilft – nicht mehr, nicht weniger.',
      icon: 'target',
    },
    {
      title: 'Schnell startklar',
      description: 'Kurze Wege, klare Absprachen, schneller Einsatz.',
      icon: 'bolt',
    },
  ];
}
