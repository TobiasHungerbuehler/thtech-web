import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

type Step = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [NgFor],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent {
  steps: Step[] = [
    { title: 'Zuhören', description: 'Ich verstehe zuerst, wie dein Betrieb funktioniert.' },
    { title: 'Vereinfachen', description: 'Gemeinsam klären wir, was wirklich nötig ist – und was nicht.' },
    { title: 'Entwickeln', description: 'Sauber, modular, wartbar. Keine Experimente auf deinem Rücken.' },
    { title: 'Betreuen', description: 'Nach dem Go-Live bleibe ich dran: Updates, Hosting, Monitoring.' },
  ];
}
