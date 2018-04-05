import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  public node: string;
  constructor(
    private db: AngularFireDatabase
  ) { }

  pushDefault(data: any) {
    this.db.database.ref().child(this.node).push().set(data)
    .then(() => console.log('save data'))
    .catch(() => console.log('Error save data'));
  }

  pushOnRef(ref: string, data: any) {
    const toSend = this.db.database.ref(`/${this.node}/${ref}`);
    toSend.set(data)
    .then(() => console.log('save data'))
    .catch(() => console.log('Error save data'));
  }

  getElementList(): Observable<any[]> {
    return this.db.list(`/${this.node}`).valueChanges();
  }
}