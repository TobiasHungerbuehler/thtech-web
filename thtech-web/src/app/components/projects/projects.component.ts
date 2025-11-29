import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  alt: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Lagerverwaltung KMU',
      alt: 'Lagerverwaltung KMU',
      description: 'Einfache Warenwirtschaft für einen Schweizer Handwerksbetrieb. Übersichtlich, schnell, ohne Schnickschnack.',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?auto=format&fit=crop&w=1080&q=80',
      tags: ['Angular', 'PostgreSQL', 'REST API'],
    },
    {
      title: 'Auftragsverwaltung',
      alt: 'Auftragsverwaltung',
      description: 'Digitale Erfassung und Verwaltung von Kundenaufträgen mit automatischer Rechnungsstellung.',
      image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?auto=format&fit=crop&w=1080&q=80',
      tags: ['TypeScript', 'Node.js', 'PDF-Export'],
    },
    {
      title: 'Reporting Dashboard',
      alt: 'Reporting Dashboard',
      description: 'Übersichtliche Visualisierung von Geschäftskennzahlen für fundierte Entscheidungen.',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=1080&q=80',
      tags: ['React', 'Charts', 'Real-time'],
    },
  ];
}
