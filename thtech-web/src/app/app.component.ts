import { Component } from "@angular/core";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeroComponent } from "./components/hero/hero.component";
import { BenefitsComponent } from "./components/benefits/benefits.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { TechStackComponent } from "./components/tech-stack/tech-stack.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [NavigationComponent, HeroComponent, BenefitsComponent, ProjectsComponent, AboutComponent, TechStackComponent, FooterComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "thtech-web";
}
