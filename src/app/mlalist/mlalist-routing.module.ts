import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MlalistPage } from './mlalist.page';

const routes: Routes = [
  {
    path: '',
    component: MlalistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MlalistPageRoutingModule {}
