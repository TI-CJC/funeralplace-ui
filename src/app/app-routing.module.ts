import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { QuemSomosComponent } from './modules/quem-somos/quem-somos.component';
import { ContateNosComponent } from './modules/contate-nos/contate-nos.component';
import { ServicosComponent } from './modules/servicos/servicos.component';
import { AmbienteComponent } from './modules/ambiente/ambiente.component';
import { ProdutosComponent } from './modules/produtos/produtos.component';
import { SistemaComponent } from './modules/sistema/sistema/sistema.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'contate-nos', component: ContateNosComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'ambiente', component: AmbienteComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'sistema', component: SistemaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
