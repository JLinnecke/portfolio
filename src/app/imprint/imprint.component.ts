import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
