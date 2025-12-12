import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { Component } from "@angular/core";

type Benefit = {
    title: string;
    description: string;
    icon: "chart" | "cogs" | "code";
};

@Component({
    selector: "app-benefits",
    standalone: true,
    imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
    templateUrl: "./benefits.component.html",
    styleUrl: "./benefits.component.scss",
})
export class BenefitsComponent {
    benefits: Benefit[] = [
        {
            title: "Massgeschneiderte Web-Plattformen",
            description: "Schluss mit Excel-Chaos. Ich baue zentrale Plattformen, die deine Daten und Prozesse bündeln. Jeder Mitarbeiter sieht genau das, was er braucht – egal ob im Büro oder mobil.",
            icon: "code",
        },
        {
            title: "Prozess-Automatisierung",
            description: "Warum tippen, wenn es der Computer kann? Von der automatischen Offerte bis zum Lieferschein. Wir verbinden deine Systeme, damit Daten fliessen, statt kopiert zu werden.",
            icon: "cogs",
        },
        {
            title: "KI mit Bodenhaftung",
            description: "Kein Hype, sondern Werkzeuge. Wir setzen KI (Agents) dort ein, wo sie echten Mehrwert bringt: Daten auswerten, Texte generieren oder komplexe Anfragen vorfiltern.",
            icon: "chart",
        },
    ];
}
