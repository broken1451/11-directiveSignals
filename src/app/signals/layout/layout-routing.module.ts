import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'counter',
        loadChildren: () => import('../pages/counter/counter.module').then(m => m.CounterModule)
      },
      {
        path: 'properties',
        loadChildren: () => import('../pages/properties/properties.module').then(m => m.PropertiesModule)
      },
      {
        path: 'user-info',
        loadChildren: () => import('../pages/user-info/user-info.module').then(m => m.UserInfoModule)
      },
      {
        path: '**',
        redirectTo: 'counter',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
