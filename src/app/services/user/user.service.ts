import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from './user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  public isLogged = false;

  constructor(public auth: AngularFireAuth, private authService: AuthService) {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.notifyUser({ email: user.email })
        this.isLogged = true;
        return;
      }
      this.isLogged = false;
    })
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  notifyUser(user: User) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
    this.authService.logOut()
  }
}
