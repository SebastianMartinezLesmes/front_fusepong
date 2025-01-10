import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LookDataPage } from './look-data/look-data.page'; // Importa directamente el componente standalone
import { HomePage } from './home/home.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'look-data',
    component: LookDataPage,
    pathMatch: 'full', // Usa el componente directamente
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
