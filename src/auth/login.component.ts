// MOST Web Framework Codename Zero Gravity Copyright (c) 2017-2022, THEMOST LP All rights reserved
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'user-login',
  template: `
  <div></div>
  `
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private authService: AuthService) { }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.authService.login();
  }

}
