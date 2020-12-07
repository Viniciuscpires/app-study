import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private collectionPath = '/profiles'
  profileCollection: AngularFirestoreCollection<any>;

  constructor(
    private db: AngularFirestore
  ) {
    this.profileCollection = db.collection(this.collectionPath);
  }

  getAll(): AngularFirestoreCollection<any> {
    return this.profileCollection;
  }

  create(profile: any): any {
    return this.profileCollection.doc(profile.email).set({ ...profile });
  }

  update(id: string, data: any): Promise<void> {
    return this.profileCollection.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.profileCollection.doc(id).delete();
  }
}
