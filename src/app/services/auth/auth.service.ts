import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(public auth: AngularFireAuth) {      
        this.auth.setPersistence('session')
    }

    async login(email: string, password: string) {
        try {
            if (!email || !password) throw new Error('Invalid email and/or password');
            const { user } = await this.auth.signInWithEmailAndPassword(email, password);
            return true;
        } catch (error) {
            console.log('Sign in failed', error);
            return false;
        }
    }

    async signOut() {
        try {
            await this.auth.signOut();
            return true;
        } catch (error) {
            console.log('Sign out failed', error);
            return false;
        }
    }
}
