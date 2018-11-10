import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditShoppingItemPage } from './edit-shopping-item.page';

const routes: Routes = [
  {
    path: '',
    component: EditShoppingItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditShoppingItemPage]
})
export class EditShoppingItemPageModule {}
