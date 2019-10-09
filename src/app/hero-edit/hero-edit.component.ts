import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../shared/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  // herosData: {}
  selectedHeroId: string = ''
  errorMessage = ''
  selectedHero: { id: number, name: string } = { id: 0, name: '' }
  constructor(private httpService: HttpServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectedHero = this.httpService.selectedHero
    this.activatedRoute.params.subscribe((param) => {
      this.selectedHeroId = param.id
    })
  }
  updateHero() {
    this.errorMessage = ''
    if (this.selectedHero.name === '') {
      this.errorMessage = 'Hero name can\'t be empty'
    } else {
      this.httpService.updateData(this.selectedHeroId, this.selectedHero).subscribe((data) => { },
        (err) => {
          this.errorMessage = 'can\'t reach the server'
        },
        () => {
          this.router.navigate(['/dashboard'])
        })
    }
  }
}
