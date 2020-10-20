import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceTrackerComponent } from './modules/customer/components/service-tracker/service-tracker.component';
import { ServiceComponent } from './modules/customer/components/service/service.component';
import { UpdateServiceComponent } from './modules/customer/components/update-service/update-service.component';

const routes: Routes = [
  { path: "servicio/:dateID", component: ServiceComponent },
  { path: "Servicio/:dateID", component: ServiceComponent },
  { path: "servicio/editar/:dateID", component: UpdateServiceComponent },
  { path: "estatus-de-servicio/:dateID", component: ServiceTrackerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
