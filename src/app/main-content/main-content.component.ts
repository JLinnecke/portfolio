import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule, 
    LandingpageComponent, 
    AboutMeComponent, 
    MySkillsComponent, 
    PortfolioComponent, 
    ReferencesComponent, 
    ContactComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
