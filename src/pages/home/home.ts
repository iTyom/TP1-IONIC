import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Shake } from '@ionic-native/shake';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private toastCtrl: ToastController, private vibration: Vibration, private tts: TextToSpeech, private shake: Shake) {

    }



    test() {
        console.log("Test du bouton");
    }

    showToast() {
        let toast = this.toastCtrl.create({
        message: 'SUCCESS',
        duration: 3000,
        position: 'top'
    });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

         toast.present();
    }

    doShake() {
        const watch = this.shake.startWatch(1).subscribe(() => {
            // do something
            this.showToast();
        });
    }

    doVibration() {
        this.vibration.vibrate([2000,1000,2000]);
    }

    doTextToSpeech() {
        this.tts.speak('Hello World')
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
    }

    

    

}


