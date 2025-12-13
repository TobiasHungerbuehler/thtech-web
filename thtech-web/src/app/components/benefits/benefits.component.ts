import { Component } from "@angular/core";
import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";

@Component({
    selector: "app-benefits",
    standalone: true,
    imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
    templateUrl: "./benefits.component.html",
    styleUrl: "./benefits.component.scss",
})
export class BenefitsComponent {
    benefits = [
        {
            title: "Massgeschneiderte Web-Plattformen",
            description: "Schluss mit Excel-Chaos. Ich baue zentrale Plattformen, die Ihre Daten und Prozesse bündeln. Kunden und Mitarbeiter sehen genau das, was sie brauchen – egal ob im Büro oder mobil.",
            icon: "code",
        },
        {
            title: "Prozess-Automatisierung",
            description: "Von der automatischen Offerte bis zum Lieferschein. Lassen Sie Ihre Kunden Bestellungen direkt selbst erfassen. Ihr Vertrieb erhält damit bessere Leads und spart wertvolle Zeit.",
            icon: "cogs",
        },
        {
            title: "KI mit Bodenhaftung",
            description: "Kein Hype, sondern nützliche Unterstützung für interne Prozesse. Wir nutzen KI-Agenten dort, wo sie Ihr Team entlasten: Daten auswerten oder Texte vorformulieren. Ein starker Hebel – aber immer unter Ihrer Kontrolle.",
            icon: "chart",
        },
    ];
}
