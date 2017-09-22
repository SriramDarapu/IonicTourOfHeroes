import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hero } from '../../app/hero';
import { HeroService } from '../../app/hero.service';
import { SharedService } from '../../app/share.service';
import { HeroDetailPage } from '../hero-detail/hero-detail';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  heroes: Hero[];
  films: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private heroService: HeroService, private sharedService: SharedService, public http: Http) {
    heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.films = this.http.get('http://swapi.co/api/films').map(res => res.json());
  }

  itemSelected(hero: Hero): void {
    this.sharedService.setDetails(hero);
    this.navCtrl.push(HeroDetailPage);
  }

}
