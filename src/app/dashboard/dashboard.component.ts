import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  contacts: Contact[] = [];

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
