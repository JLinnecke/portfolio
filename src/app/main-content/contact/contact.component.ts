import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CustomValidators } from '../../custom-validators'; // Importieren Sie die benutzerdefinierten Validatoren

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent], // Importieren Sie das ReactiveFormsModule und FooterComponent
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  contactForm: FormGroup;

  @ViewChild('nameInvalidIcon') nameInvalidIcon!: ElementRef;
  @ViewChild('nameValidIcon') nameValidIcon!: ElementRef;
  @ViewChild('emailInvalidIcon') emailInvalidIcon!: ElementRef;
  @ViewChild('emailValidIcon') emailValidIcon!: ElementRef;
  @ViewChild('messageInvalidIcon') messageInvalidIcon!: ElementRef;
  @ViewChild('messageValidIcon') messageValidIcon!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, CustomValidators.minLength(3), CustomValidators.lettersOnly()]], // Anwenden der benutzerdefinierten Validatoren
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  isValid(field: string): boolean {
    const control = this.contactForm.get(field);
    return control ? control.valid && (control.dirty || control.touched) : false;
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  ngAfterViewInit() {
    this.contactForm.valueChanges.subscribe(() => {
      this.updateValidationIcons();
    });
  }

  updateValidationIcons() {
    this.toggleIconVisibility(this.nameInvalidIcon, this.isInvalid('name'));
    this.toggleIconVisibility(this.nameValidIcon, this.isValid('name'));
    this.toggleIconVisibility(this.emailInvalidIcon, this.isInvalid('email'));
    this.toggleIconVisibility(this.emailValidIcon, this.isValid('email'));
    this.toggleIconVisibility(this.messageInvalidIcon, this.isInvalid('message'));
    this.toggleIconVisibility(this.messageValidIcon, this.isValid('message'));
  }

  toggleIconVisibility(icon: ElementRef, isVisible: boolean) {
    icon.nativeElement.style.display = isVisible ? 'flex' : 'none';
  }
}