import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { QuemSomosComponent } from './modules/quem-somos/quem-somos.component';
import { ContateNosComponent } from './modules/contate-nos/contate-nos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'contate-nos', component: ContateNosComponent },
  { path: 'servicos', component: ContateNosComponent },
  { path: 'ambiente', component: ContateNosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
