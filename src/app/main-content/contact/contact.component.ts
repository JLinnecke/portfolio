import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, RouterModule, TranslateModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  };

  emailSent = false;

  mailTest = false; 
  post = {
    endPoint: 'https://www.johannes-linnecke.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text' as 'json',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            this.emailSent = true; // Show the popup
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Error:', error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  closePopup() {
    this.emailSent = false; // Hide the popup
  }
}