import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { hero } from 'src/app/shared/hero';
import { map } from 'rxjs/operators'
import { HttpServiceService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  @Output() emitter = new EventEmitter<hero[]>()
  @Input() herosArr: hero[] = []
  errorMessage = ''
  newHero: { id: number, name: string } = { id: 0, name: '' }

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
  }

  addNewHero() {
    this.errorMessage = ''
    if (this.newHero.name === '') {
      this.errorMessage = 'The hero name can\'t be empty'
    } else {
      this.newHero.id = this.getHeroId(this.herosArr)
      this.httpService.postData(this.newHero).subscribe(
        (data) => { },
        (err) => {
          this.errorMessage = 'Can\'t reach the server'
        },
        () => {
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
                this.emitter.emit(this.herosArr)
                this.newHero.name = ''
              }
            )
        })
    }
  }
  getHeroId(arr) {
    let found = false
    let j
    for (j = 1; ; j++) {
      for (let i of arr) {
        if (i.id == j) {
          found = true
          break
        } else {
          found = false
        }
      }
      if (found == false) {
        return j
      }
    }
  }

}
