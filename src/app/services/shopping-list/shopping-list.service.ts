import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../../models/item/item.model";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class ShoppingListService {

    private shoppingListRef = this.db.list<Item>('shopping-list')

    constructor(private db: AngularFireDatabase) { }

    getShoppingList() {
        return this.shoppingListRef;
    }

    addItem(item: Item) {
        return this.shoppingListRef.push(item);
    }

    getItem(id: string) {
        // REVIEW: Not Being Used!
        // const res = this.db.object<Item>('shopping-list/' + id).valueChanges();
        /* var result;
        const res = this.db.database.ref('shopping-list/' + id).on('value', resp => {
            result = resp;
            // console.log(result);
            result = snapshotToObject(resp);
            console.log(result);
            return {...result};
        });
        return res */
    }

    updateItem(item: Item) {
        return this.shoppingListRef.update(item.key, item);
    }
}
export const snapshotToObject = snapshot => {
    let item = snapshot.val();
    item.key = snapshot.key;

    return item;
}