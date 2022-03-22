import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-logout',
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
