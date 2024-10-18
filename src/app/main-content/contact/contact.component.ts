import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatInputModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
