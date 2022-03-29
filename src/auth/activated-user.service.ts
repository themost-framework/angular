// MOST Web Framework Codename Zero Gravity Copyright (c) 2017-2022, THEMOST LP All rights reserved
import { Injectable } from '@angular/core';
import { AngularDataContext } from '../client';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActivatedUserSnapshot {
  private static readonly StorageKey = 'ActivatedUserSnapshot.activatedUser';
  constructor(private context: AngularDataContext) {
    //
  }
  get user() {
    const raw = sessionStorage.getItem(ActivatedUserSnapshot.StorageKey);
    if (raw != null) {
      const value = JSON.parse(raw);
      this.context.setBearerAuthorization(value && value.token && value.token.access_token);
      return value;
    }
    return {
      name: 'anonymous'
    };
  }
  set user(value: any) {
    if (value == null) {
      sessionStorage.removeItem(ActivatedUserSnapshot.StorageKey);
    } else {
      sessionStorage.setItem(ActivatedUserSnapshot.StorageKey, JSON.stringify(value));
    }
  }
}

@Injectable()
export class ActivatedUserService {

  public user: BehaviorSubject<any> = new BehaviorSubject(this.activatedUser);

    constructor(private context: AngularDataContext, public snapshot: ActivatedUserSnapshot) {
      this.snapshot = new ActivatedUserSnapshot(context);
    }

    private get activatedUser() {
        return this.snapshot.user;
    }

    public set(value: any) {
      this.snapshot.user = value;
      this.user.next(value);
    }


}
