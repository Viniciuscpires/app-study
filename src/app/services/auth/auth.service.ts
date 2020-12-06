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
            return user;
        } catch (error) {
            console.log('Log in failed', error);
            return error.message;
        }
    }

    async signUp(email: string, password: string) {
        try {
            if (!email || !password) throw new Error('Invalid email and/or password');
            const { user } = await this.auth.createUserWithEmailAndPassword(email, password);
            return user;
        } catch (error) {
            console.log('Sign up failed', error);
            return error.message;
        }
    }

    async sendResetPasswordEmail(email: string) {
        try {
            if (!email) throw new Error('Invalid email and/or password');
            await this.auth.sendPasswordResetEmail(email);
            return { valid: true };
        } catch (error) {
            console.log('Reset Password failed', error);
            return {
                valid: false,
                message: error.message
            };
        }
    }

    async logOut() {
        try {
            await this.auth.signOut();
            return true;
        } catch (error) {
            console.log('logout out failed', error);
            return false;
        }
    }
}
