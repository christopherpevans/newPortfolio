import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { emailValidator } from '../theme/utils/app-validators';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormSubmissionComponent } from '../shared/form-submission.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  public lat = 29.8297;
  public lng = -95.6668;
  public zoom = 12;
  public contactForm: FormGroup;

  model = new Contact('', '', '', '');
  contact: any[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private contactService: ContactService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      phone: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public onContactFormSubmit(values, formDirective: FormGroupDirective) {
    if (this.contactForm.valid) {
      // this.contactService
      //   .addContact(values)
      //   .subscribe((contact) => this.contact.push(this.model));
      console.log(values);
      formDirective.resetForm();
      this.contactForm.reset();

      this.snackBar.openFromComponent(FormSubmissionComponent, {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }
}
