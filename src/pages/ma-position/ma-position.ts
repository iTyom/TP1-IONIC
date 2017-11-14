import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the MaPositionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ma-position',
  templateUrl: 'ma-position.html',
})

export class MaPositionPage {


  constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private geolocation: Geolocation) {

      this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lon = resp.coords.longitude
      console.log(lat);
      console.log(lon);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();

        watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
         //data.coords.latitude
         //data.coords.longitude
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaPositionPage');
  };

}
