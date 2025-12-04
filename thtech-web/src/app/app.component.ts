import { Component } from "@angular/core";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeroComponent } from "./components/hero/hero.component";
import { BenefitsComponent } from "./components/benefits/benefits.component";
import { WhyComponent } from "./components/why/why.component";
import { ProcessComponent } from "./components/process/process.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { TechStackComponent } from "./components/tech-stack/tech-stack.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        NavigationComponent,
        HeroComponent,
        BenefitsComponent,
        WhyComponent,
        ProcessComponent,
        ProjectsComponent,
        AboutComponent,
        TechStackComponent,
        ContactComponent,
        FooterComponent,
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "thtech-web";
}
