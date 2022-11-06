import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  show = false;
  hide: boolean = true;
  autorisations_user: any;
  showPassword: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService:LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get controlsForm() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    localStorage.clear();
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    /* login by username & password */
    this.loginService
      .authUser(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe(() => {
          localStorage.setItem(
            'autorisations_user',
            JSON.stringify(this.autorisations_user)
          );
          this.router.navigate(['/modules']);
      });

  }


  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
