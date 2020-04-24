import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutsModule } from './shared/layouts/layouts.module';

import { LayoutMainComponent } from './shared/layouts/main/layout-main.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      //{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'comentario',
        loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    LayoutsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
