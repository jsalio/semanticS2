import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Promise } from 'q';

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

  getElementList(nodeString?: string): Observable<any[]> {
    return nodeString === undefined ? this.db.list(`/${this.node}`).valueChanges() : this.db.list(`/${nodeString}`).valueChanges();
  }


  getOnceElement(key: string): Observable<any> {
    return this.db.object(`/${this.node}/${key}`).valueChanges();
  }

  updateOnceElement(key: string, data: any): void {
    const toPut = this.db.database.ref(`/${this.node}/${key}`);
    console.log(`/${this.node}/${key} => ${JSON.stringify(data)}`);
    toPut.update(data)
    .then(() => {
      console.log('DATA UPDATED');
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
