import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { hero } from './hero';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  HerosData: hero[] = []
  selectedHero: { id: number, name: string } = { id: 0, name: '' }
  constructor(private http: HttpClient) { }

  featchData() {
    return this.http.get('https://tour-of-heros-61908.firebaseio.com/heros.json')
  }

  postData(hero) {
    return this.http.post('https://tour-of-heros-61908.firebaseio.com/heros.json', hero)
  }
  updateData(id, hero) {
    return this.http.put(`https://tour-of-heros-61908.firebaseio.com/heros/${id}.json`, hero)
  }
  deleteData(id) {
    return this.http.delete(`https://tour-of-heros-61908.firebaseio.com/heros/${id}.json`)
  }

}
