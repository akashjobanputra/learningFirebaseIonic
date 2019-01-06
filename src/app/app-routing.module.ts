import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'AddShoppingItem', loadChildren: './add-shopping-item/add-shopping-item.module#AddShoppingItemPageModule' },
  { path: 'EditShoppingItem/:id', loadChildren: './edit-shopping-item/edit-shopping-item.module#EditShoppingItemPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
