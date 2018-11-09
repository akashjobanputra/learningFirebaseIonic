import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddShoppingItemPage } from './add-shopping-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddShoppingItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddShoppingItemPage]
})
export class AddShoppingItemPageModule {}
