import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectCase = {
  id: string;
  category: string;
  title: string;
  situation: string; // Das Problem (Kopfkino Start)
  solution: string;  // Deine Arbeit
  result: string;    // Der Nutzen (Kopfkino Ziel)
  icon: string;      // Ein passendes Icon
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  cases: ProjectCase[] = [
    {
      id: '01',
      category: 'Handel & Logistik',
      title: 'Vom Excel-Chaos zur B2B-Plattform',
      icon: 'box',
      situation: 'Ein Pflanzenhändler erstickte in Excel-Listen. Jeder Kunde hatte eigene Preisstaffeln, Lieferbedingungen und Rabatte. Das Schreiben von Offerten dauerte Stunden und war fehleranfällig.',
      solution: 'Wir bauten eine Plattform, die aussieht wie ein Shop, aber denkt wie ein Buchhalter. Sie kennt jeden Kunden-Rabatt und berechnet im Hintergrund automatisch Fracht und Margen.',
      result: 'Der Kunde bestellt per Klick. Das System erstellt Rechnung, Lieferschein und Etikett für die Produktion automatisch. Zeitersparnis: ~15h pro Woche.'
    },
    {
      id: '02',
      category: 'Data & KI',
      title: 'Sprich mit deiner Datenbank',
      icon: 'database',
      situation: 'Ein Geschäftsführer wollte wissen: "Wie viele rote Rosen haben wir letzte Woche verkauft?" Um das zu erfahren, musste er die IT anrufen oder mühsam Berichte exportieren.',
      solution: 'Implementierung eines sicheren AI-Agents (auf Basis von n8n), der direkt an die Datenbank angeschlossen ist. Er versteht Schweizerdeutsch und normale Fragen.',
      result: 'Der Chef tippt in den Chat: "Zeig mir den Umsatz von gestern" – und bekommt Sekunden später die exakte Grafik. Ohne IT-Ticket, ohne Wartezeit.'
    },
    {
      id: '03',
      category: 'Produktivität',
      title: 'Der digitale Fokus-Assistent',
      icon: 'focus',
      situation: 'Standard To-Do-Listen reichen oft nicht aus, wenn der Tag chaotisch wird. Wichtige Aufgaben gehen im Tagesgeschäft unter, der Fokus geht verloren.',
      solution: 'Entwicklung einer Web-App ("Focus Tool"), die den Arbeitstag aktiv strukturiert. Sie zwingt freundlich zur Priorisierung und blendet alles aus, was gerade nicht dran ist.',
      result: 'Ein Werkzeug, das nicht nur Aufgaben speichert, sondern hilft, sie auch wirklich abzuarbeiten. Aus eigenem Bedarf entstanden, für den täglichen Einsatz optimiert.'
    }
  ];
}
