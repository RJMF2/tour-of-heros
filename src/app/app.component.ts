import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './shared/http-service.service';

import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
  }
}
