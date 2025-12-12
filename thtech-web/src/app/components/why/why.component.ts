import { Component } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';

type Reason = {
  title: string;
  description: string;
  icon: 'wallet' | 'person' | 'shield'; // Neue Icons angepasst
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
      title: 'Fixpreis statt Stunden-Grab',
      description: 'Ich verkaufe keine Zeit, sondern Ergebnisse. Du bekommst einen garantierten Fixpreis. So kannst du vorher exakt kalkulieren, ob sich die Investition für dich lohnt.',
      icon: 'wallet',
    },
    {
      title: 'Direkter Partner',
      description: 'Kein "Account Manager", der stille Post spielt. Du sprichst direkt mit dem Entwickler, der dein Business versteht. Das spart Zeit und verhindert Missverständnisse.',
      icon: 'person',
    },
    {
      title: 'Schweizer Qualität & Daten',
      description: 'Kein Outsourcing, keine billigen Cloud-Tricks. Deine Software und deine Daten bleiben hier in der Schweiz. Sauber gebaut, sicher gehostet.',
      icon: 'shield',
    },
  ];
}
