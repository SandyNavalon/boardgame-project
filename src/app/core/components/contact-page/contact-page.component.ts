import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {


  //FORMULARIO REACTIVO
  contactForm: FormGroup;

  submitted: boolean = false;

  contactFormValueChanges$;
  contactFormStatusChanges$;

 constructor(private formBuilder: FormBuilder) {
   this.contactForm = this.formBuilder.group(
     {
       name: ["", [Validators.required, Validators.minLength(2)]],
       email: ["", [Validators.maxLength(30), Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/)]],
       description: ["", [Validators.maxLength(200)]],
     }
   );

   this.contactFormValueChanges$ = this.contactForm.valueChanges.subscribe(changes => {
     /* console.log(changes); */
   })

   this.contactFormStatusChanges$ = this.contactForm.statusChanges.subscribe(status => {
     console.log(status);
   })

 }

 ngOnInit(): void {
 }

 ngOnDestroy(){
   this.contactFormValueChanges$.unsubscribe();
   this.contactFormStatusChanges$.unsubscribe();
/*    this.contactFormDescriptionValueChanges$.unsubscribe();
 */ }

 onSubmit(){
   this.submitted = true;

   console.log('Save: ', this.contactForm.value);
 }

}
