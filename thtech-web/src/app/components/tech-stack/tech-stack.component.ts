import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

type Tech = {
  name: string;
  icon: 'typescript' | 'react' | 'git' | 'node' | 'postgres' | 'shield';
};

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  techStack: Tech[] = [
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Git', icon: 'git' },
    { name: 'Node.js', icon: 'node' },
    { name: 'PostgreSQL', icon: 'postgres' },
    { name: 'Sicherheit', icon: 'shield' },
  ];
}
