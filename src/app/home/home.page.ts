import { Component } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs';
import { Item } from '../../models/item/item.model';
import { map } from "rxjs/operators";
import { snapshotToObject } from '../utils/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(private shopping: ShoppingListService) {
    this.shoppingList$ = this.shopping
      .getShoppingList()
      .snapshotChanges().pipe(map(changes => {
        return changes.map(c => (snapshotToObject(c.payload)))
      }
      ))
  }
}
