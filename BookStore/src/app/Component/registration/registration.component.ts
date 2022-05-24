import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/user/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm! : FormGroup;
  submitted=false;
  category:any;

  constructor(private formBuilder:FormBuilder,private user:UserService) { }


  ngOnInit(): void {
    this.RegistrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
      service: ['advance']
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log("inputs", this.RegistrationForm.value);
    if (this.RegistrationForm.valid) {
      console.log("valid", this.RegistrationForm.value);
      let data = {
        fullName: this.RegistrationForm.value.fullName,
        email: this.RegistrationForm.value.email,
        password: this.RegistrationForm.value.password,
        phone: this.RegistrationForm.value.phone,
      }
      this.user.register(data).subscribe((res: any) => {
        console.log(res);
      })
    }

    else {
      console.log("Enter valid data");
    }

  }

}
