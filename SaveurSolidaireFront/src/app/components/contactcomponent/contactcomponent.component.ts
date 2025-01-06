import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllowedServiceService } from 'src/app/services/allowed/allowed-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactcomponent',
  templateUrl: './contactcomponent.component.html',
  styleUrls: ['./contactcomponent.component.css']
})
export class ContactcomponentComponent implements OnInit {
  contactForm!: FormGroup;
  businesses:any;

  constructor(
    private fb: FormBuilder,
    private allowedservice: AllowedServiceService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.getAllEntreprise();
  }

  initializeForm() {
    this.contactForm = this.fb.group({
      senderEmail: ['', [Validators.required, Validators.email]],
      selectedBusiness: ['', Validators.required],
      subject: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]], 
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  getAllEntreprise() {
    this.allowedservice.getAllentreprise().subscribe((data: any[]) => {
      this.businesses =data;
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    const contactData = {
      senderEmail: this.contactForm.value.senderEmail,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };

    const entrepriseId = this.contactForm.value.selectedBusiness; // Get selected business ID

    this.allowedservice.addContact(contactData, entrepriseId).subscribe(
      () => {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success'
        });
        this.contactForm.reset();
      },
      (error) => {
        console.error('Error sending message:', error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an issue sending your message. Please try again.',
          icon: 'error'
        });
      }
    );
  }
}
