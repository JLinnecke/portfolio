import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
