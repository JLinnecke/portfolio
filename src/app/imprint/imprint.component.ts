import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent, HttpClientModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
