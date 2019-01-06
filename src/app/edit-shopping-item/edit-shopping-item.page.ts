import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { Item } from '../../models/item/item.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController } from '@ionic/angular';
import { ToastService } from '../src/app/services/toast.service';

@Component({
  selector: 'app-edit-shopping-item',
  templateUrl: './edit-shopping-item.page.html',
  styleUrls: ['./edit-shopping-item.page.scss'],
})
export class EditShoppingItemPage implements OnInit {

  id: string;
  public item: Item;

  constructor(private shopping: ShoppingListService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    public navCtrl: NavController,
    private toast: ToastService) { }

  ngOnInit() {
    this.db.database.ref('shopping-list/' + this.route.snapshot.paramMap.get('id')).on('value', resp => {
      this.item = <Item>snapshotToObject(resp);
    });
    // this.id =  this.route.snapshot.paramMap.get('id');
    /* console.log(`ID: ${this.id}`);
    this.item = this.shopping.getItem(this.id);
    this.item = <Item>this.item;
    console.log(this.item); */
  }

  saveItem() {
    this.shopping.updateItem(this.item)
      .then(() => {
        this.toast.presentToast(`${this.item.name} saved!`);
        this.navCtrl.goBack();
      })
  }
}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;
  return item;
}
