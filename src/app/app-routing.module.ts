import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UserComponent } from './shared/components/user/user.component';
import { ProdDashComponent } from './shared/components/prod-dash/prod-dash.component';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { ProductResolver } from './shared/components/resolver/product.resolver';
import { UserResolver } from './shared/components/resolver/user.resolver';
import { AuthGuard } from './shared/gaurds/auth.guard';
import { ProdFormComponent } from './shared/components/prod-form/prod-form.component';
import { ProductComponent } from './shared/components/product/product.component';
import { UserRoleGuard } from './shared/gaurds/user-role.guard';
import { CandeactiveGuard } from './shared/gaurds/candeactive.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRole: ['Admin', 'buyer', 'superAdmin'],
    },
  },
  {
    path: 'user',
    component: UserDashComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRole: ['Admin', 'superAdmin'],
    },
    resolve: {
      userdata: UserResolver,
    },
    children: [
      {
        path: 'add',
        component: UserFormComponent,
      },
      {
        path: ':id',
        component: UserComponent,
        resolve: {
          userdata: UserResolver,
        },
      },
      {
        path: ':id/edit',
        component: UserFormComponent,
        canDeactivate: [CandeactiveGuard],
      },
    ],
  },
  {
    path: 'product',
    component: ProdDashComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRole: ['Admin', 'buyer', 'superAdmin'],
    },
    resolve: {
      productdata: ProductResolver,
    },
    children: [
      {
        path: 'add',
        component: ProdFormComponent,
      },
      {
        path: ':id',
        component: ProductComponent,
        resolve: {
          productdata: ProductResolver,
        },
      },
      {
        path: ':id/edit',
        component: ProdFormComponent,
        canDeactivate: [CandeactiveGuard],

      },
    ],
  },
  {
    path: 'fairs',
    component: FairsComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRole: ['superAdmin'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
