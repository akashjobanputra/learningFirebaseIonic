import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { NavController, NavParams, Nav } from '@ionic/angular';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.page.html',
  styleUrls: ['./add-shopping-item.page.scss'],
})

export class AddShoppingItemPage {

  item: Item = {
    name: undefined,
    quantity: undefined,
    price: undefined
  };

  constructor(public navCtrl: NavController, public router: Router, private shopping: ShoppingListService) { }

  addItem(item: Item) {
    this.shopping.addItem(item).then(ref => {
      console.log(ref.key);
      // this.router.
      this.navCtrl.navigateBack('/home')
    })
  }

  // ngOnInit() {
  // }

}
