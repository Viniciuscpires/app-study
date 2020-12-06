import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from './user';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  public isLogged = false;

  constructor(public auth: AngularFireAuth) {
    this.auth.onAuthStateChanged(user => {
      console.log('onAuthStateChanged - UserService');
      console.log(user);
      
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
    console.log('notifyUser');
    
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
    this.auth.signOut()
  }
}
