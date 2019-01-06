import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  show(message: string, duration: number = 3000) {
    return this.toastCtrl
      .create({
        message,
        duration
      })
  }

  async presentToast(message: string, duration: number = 3000) {
    const toast = await this.toastCtrl.create({
      message,
      duration
    });
    toast.present();
  }
}
