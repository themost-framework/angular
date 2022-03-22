import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
  <div></div>
  `
})
export class LogoutComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private authService: AuthService) { }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.authService.logout();
  }

}
