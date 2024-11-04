import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cita-aleatoria',
    loadComponent: () => import('./cita-aleatoria/cita-aleatoria.page').then(m => m.CitaAleatoriaPage), // Página de cita aleatoria
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'manage-citas',
    loadComponent: () => import('./gestionar-citas/gestionar-citas.page').then(m => m.GestionarCitasPage),
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./configuracion/configuracion.page').then(m => m.ConfiguracionPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}