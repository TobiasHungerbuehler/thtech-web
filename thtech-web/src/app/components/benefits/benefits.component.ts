import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

type Benefit = {
  title: string;
  description: string;
  icon: 'arrow' | 'stack' | 'shield';
};

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      title: 'Individuelle Software für KMU',
      description: 'Massgeschneiderte Lösungen, die exakt zu deinen Geschäftsprozessen passen. Keine überladenen Standardprodukte.',
      icon: 'arrow',
    },
    {
      title: 'Hosting & Betreuung aus einer Hand',
      description: 'Von der Entwicklung bis zum Betrieb – alles bei einem Ansprechpartner. Zuverlässig und unkompliziert.',
      icon: 'stack',
    },
    {
      title: 'Datenschutz: Server in der Schweiz',
      description: 'Deine Daten bleiben in der Schweiz. Keine Weitergabe an Dritte, keine Cloud-Riesen, keine Kompromisse.',
      icon: 'shield',
    },
  ];
}
