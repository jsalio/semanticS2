import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from '../../../services/firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() nodeID: string;
  coursesObservable: any;
  showloading = true;
  constructor(
    private fireServ: FirebaseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.fireServ.node = 'courses';
    this.fireServ.getOnceElement('Semantic').subscribe((data) => {
      this.coursesObservable = data;
      this.showloading = false;
    });
  }
}
