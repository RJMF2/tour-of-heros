import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators'

import { HttpServiceService } from '../shared/http-service.service';
import { hero } from '../shared/hero'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }
  dataRecived: boolean = false
  error: boolean = false
  herosData: hero[] = []
  ngOnInit() {
    this.httpService.featchData()
      .pipe(map((data) => {
        let herosArray: hero[] = []
        for (let key in data) {
          herosArray.push({ ...data[key], heroId: key })
        }
        return herosArray
      }))
      .subscribe((data) => {
        this.herosData = data
      }, (err) => {
        this.error = true
      }, () => {
        this.dataRecived = true
      })
  }

  changingData(newHeros) {
    this.herosData = newHeros
  }
}
