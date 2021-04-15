/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AuthGuard } from './guard/auth.guard';
import { LeaveGuard } from './leaved/leaved.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'stats',
        loadChildren: () => import('./pages/stats/stats.module').then(m => m.StatsModule),
        canActivate: [AuthGuard]
      },

      {
        path: 'manage-orders',
        loadChildren: () => import('./pages/manage-orders/manage-orders.module').then(m => m.ManageOrdersModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'contacts',
        loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
        canDeactivate: [LeaveGuard]
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'variation',
        loadChildren: () => import('./pages/variations/variations.module').then(m => m.VariationsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'secondry-variation',
        loadChildren: () => import('./pages/secondry-variations/secondry-variations.module').then(m => m.SecondryVariationsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'manage-secondry-variation',
        loadChildren: () => import('./pages/manage-secondry-variations/manage-secondry-variations.module').then(m => m.ManageSecondryVariationsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'manage-products',
        loadChildren: () => import('./pages/manage-products/manage-products.module').then(m => m.ManageProductsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'manage-variation',
        loadChildren: () => import('./pages/manage-variation/manage-variation.module').then(m => m.ManageVariationModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'manage-category-index',
        loadChildren: () => import('./pages/manage-category-index/manage-category-index.module').then(m => m.ManageCategoryIndexModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'reviews',
        loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsModule),
        canActivate: [AuthGuard]
      },

    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'reset',
        loadChildren: () => import('./pages/reset/reset.module').then(m => m.ResetModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
