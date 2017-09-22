import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hero } from '../../app/hero';
import { HeroService } from '../../app/hero.service';
import { SharedService } from '../../app/share.service';
import { HeroDetailPage } from '../hero-detail/hero-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  heroes: Hero[];

  constructor(public navCtrl: NavController, private heroService: HeroService, private sharedService: SharedService) {
    heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  itemSelected(hero: Hero): void {
    this.sharedService.setDetails(hero);
    this.navCtrl.push(HeroDetailPage);
  }

}
