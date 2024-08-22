import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './signals.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
