import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedService } from '../../app/share.service';
import { Hero } from '../../app/hero';

/**
 * Generated class for the HeroDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hero-detail',
  templateUrl: 'hero-detail.html',
})
export class HeroDetailPage {

  @Input() hero: Hero;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sharedService: SharedService) {
    this.hero = sharedService.getDetails();
  }

  ionViewDidLoad() {
    this.hero = this.sharedService.getDetails();
    console.log('ionViewDidLoad HeroDetailPage');
  }

  itemSelected(hero: Hero): void {
    this.sharedService.setDetails(hero);
    this.navCtrl.push(HeroDetailPage);
  }

}
