import { Component, OnInit, Input } from '@angular/core';
import { hero } from 'src/app/shared/hero';

@Component({
  selector: 'app-top-heros-item',
  templateUrl: './top-heros-item.component.html',
  styleUrls: ['./top-heros-item.component.css']
})
export class TopHerosItemComponent implements OnInit {
  @Input() hero: hero
  constructor() { }

  ngOnInit() {
  }

}
