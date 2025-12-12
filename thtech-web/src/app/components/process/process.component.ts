import { Component } from "@angular/core";
import { NgFor } from "@angular/common";

type ProcessStep = {
    step: string;
    title: string;
    description: string;
};

@Component({
    selector: "app-process",
    standalone: true,
    imports: [NgFor],
    templateUrl: "./process.component.html",
    styleUrl: "./process.component.scss",
})
export class ProcessComponent {
    steps: ProcessStep[] = [
        {
            step: "01",
            title: 'Der "Lohnt sich das?"-Check',
            description: "Bevor wir starten, rechnen wir gemeinsam: Wie viel Zeit/Geld sparst du durch die Lösung? Wenn die Rechnung nicht aufgeht, bauen wir es nicht. Ganz einfach.",
        },
        {
            step: "02",
            title: "Konzept & Fixpreis",
            description: "Ich definiere den Lösungsweg und nenne dir einen verbindlichen Preis. Du weisst auf den Franken genau, was auf dich zukommt. Keine versteckten Kosten.",
        },
        {
            step: "03",
            title: "Bau & Integration",
            description: "Ich entwickle die Software und binde sie nahtlos in deine bestehenden Abläufe ein. Du bekommst regelmässige Updates, aber ich verschwende deine Zeit nicht mit Tech-Details.",
        },
        {
            step: "04",
            title: "Betrieb & Weiterentwicklung",
            description: "Nach dem Start bin ich nicht weg. Ich kümmere mich um Hosting, Backups und Updates. Und wenn dein Business wächst, wächst die Software mit.",
        },
    ];
}
