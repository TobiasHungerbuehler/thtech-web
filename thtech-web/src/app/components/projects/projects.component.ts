import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

type ProjectCase = {
    id: string;
    category: string;
    title: string;
    situation: string;
    solution: string;
    result: string;
    icon: string;
};

@Component({
    selector: "app-projects",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
    cases = [
        {
            id: "01",
            category: "Handel & Logistik",
            title: "Vom Angebots Chaos zur B2B-Plattform",
            situation: "Ein Pflanzenhändler kämpfte mit seinem wachsenden Online-Shop. Die komplexe Preislogik mit individuellen Kunden-Rabatten und Lieferbedingungen überforderte das bestehende WordPress-System komplett. Die Seite war langsam, instabil und drohte unter der Last der Plugins auseinanderzufallen.",
            solution: "Ablösung durch eine modern programmierte Web-Plattform. Sie sieht aus wie ein Shop, ist aber im Kern eine Hochleistungs-Maschine, die alle komplexen Konditionen im Hintergrund fehlerfrei und blitzschnell berechnet.",
            result: "Das System ist nun stabil und beliebig skalierbar. Neue Lieferanten können einfach angebunden werden und die Plattform wächst flexibel mit den zukünftigen Bedürfnissen des Geschäfts mit.",
        },
        {
            id: "02",
            category: "Interne Effizienz",
            title: "Datenabfrage ohne IT-Ticket",
            situation: 'Die Geschäftsführung brauchte oft schnelle Zahlen ("Umsatz letzte Woche?", "Top-Produkte?"). Dafür musste bisher mühsam ein Report aus der IT angefordert oder manuell in Tabellen gesucht werden.',
            solution: "Implementierung eines internen KI-Assistenten, der sicher an die Datenbank angeschlossen ist. Er versteht Fragen in normaler Sprache und generiert die passende Auswertung sofort.",
            result: "Entscheider bekommen ihre Antworten in Sekunden statt Stunden. Die IT wird entlastet, und die Datenbasis wird tatsächlich genutzt, statt nur gespeichert.",
        },
        {
            id: "03",
            category: "Prozess-Automatisierung",
            title: "Bestellungen Verarbeiten",
            situation: "Bestellungen kamen unsortiert per E-Mail rein. Das manuelle Weiterleiten an die Fachabteilungen, das Abtippen für Lieferscheine und das Erstellen individueller Etiketten war fehleranfällig und langsam.",
            solution: "Ein intelligenter Workflow analysiert nun eingehende E-Mails und verteilt Aufgaben automatisch. Das System erstellt Lieferscheine und druckt die Etiketten exakt nach Kundenangabe – ohne manuelles Zutun.",
            result: "Lückenlose Kontrolle vom E-Mail-Eingang bis zur Lieferung. Kein Abtippen mehr, keine falschen Etiketten. Der Prozess läuft jetzt schnell, transparent und fehlerfrei.",
        },
    ];
}
