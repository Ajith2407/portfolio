import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'Bootstrap', 'GitHub Pages', 'Github Actions'],
      src: './assets/projects/portfolio.jpg',
      link: 'https://github.com/SebastianoFazzino/my-portfolio',
    },
    {
      name: 'Authentication',
      description: 'Built a secure, responsive authentication system with user signup/login and role-based access control.	Integrated Firebase Firestore for real-time data and session management .Designed reusable UI components using Angular Material. Implemented RxJS-based state management and Angular services for data flow',
      technologies: ['Angular', 'TypeScript', 'HTML', 'Bootstrap', 'Firebase', 'Firestore'],
      src: './assets/projects/authenticate.jpg',
      link: 'https://ajith2407.github.io/Angular_login/',
    }
    

      
  ];
}
