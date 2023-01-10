import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  errorMessage: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    const email = form.value['email'];
    const password = form.value['password'];
    const authObserver = {
      next: (responseData: AuthResponseData) => {
        this.isLoading = false;
        console.log(responseData);
        this.router.navigate(['/recipes']);
      },
      error: (errorMessage: string) => {
        this.isLoading = false;
        this.errorMessage = errorMessage;
      },
    };

    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(authObserver);
    } else {
      this.authService.signUp(email, password).subscribe(authObserver);
    }

    form.reset();
  }

  onHandleModal() {
    this.errorMessage = null;
  }
}
