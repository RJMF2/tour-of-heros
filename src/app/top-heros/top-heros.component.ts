import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

import { hero } from '../shared/hero';
import { HttpServiceService } from '../shared/http-service.service';


@Component({
  selector: 'app-top-heros',
  templateUrl: './top-heros.component.html',
  styleUrls: ['./top-heros.component.css']
})
export class TopHerosComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }
  herosData: hero[] = []
  error: boolean = false
  dataRecived: boolean = false
  ngOnInit() {
    this.httpService.featchData()
      .pipe(map((data) => {
        let i = 0
        let herosArray: hero[] = []
        for (let key in data) {
          herosArray.push({ ...data[key], heroId: key })
          if (i++ >= 3) {
            break;
          }
        }
        return herosArray
      }))
      .subscribe(
        (data) => {
          this.herosData = data
        },
        (err) => {
          this.error = true
        },
        () => {
          this.dataRecived = true
        })
  }

  sendSelectedHero(selectedHeroId,selectedHeroName){
    this.httpService.selectedHero.id = selectedHeroId
    this.httpService.selectedHero.name = selectedHeroName
  }

}
