import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || 'en';
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }
}