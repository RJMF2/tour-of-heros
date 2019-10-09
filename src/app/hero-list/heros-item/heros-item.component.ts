import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { hero } from '../../shared/hero'
import { HttpServiceService } from 'src/app/shared/http-service.service';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
@Component({
  selector: 'app-heros-item',
  templateUrl: './heros-item.component.html',
  styleUrls: ['./heros-item.component.css']
})
export class HerosItemComponent implements OnInit {
  @Output() emitter = new EventEmitter<hero[]>()
  herosArr: hero[] = []
  @Input() hero: hero
  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit() {
  }
  deleteHero(heroId) {
    this.httpService.deleteData(heroId).subscribe(() => {
      this.httpService.featchData()
        .pipe(map((data) => {
          let arr: hero[] = []
          for (let key in data) {
            arr.push({ ...data[key], heroId: key })
          }
          return arr
        }))
        .subscribe(
          (data) => {
            this.herosArr = data
          },
          (err) => {
            console.log('error')
          },
          () => {
            this.emitter.emit(this.herosArr);
          }
        )
    })
  }

  editHero(hero) {
    this.httpService.selectedHero = hero
    this.router.navigate(['/edit', hero.heroId])
  }

}
