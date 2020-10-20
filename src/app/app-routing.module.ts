import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceTrackerComponent } from './modules/customer/components/service-tracker/service-tracker.component';
import { ServiceAdminComponent } from './modules/customer/components/service-admin/service-admin.component';
import { ServiceComponent } from './modules/customer/components/service/service.component';
import { UpdateServiceComponent } from './modules/customer/components/update-service/update-service.component';

const routes: Routes = [
  { path: "servicio/:dateID", component: ServiceComponent },
  { path: "Servicio/:dateID", component: ServiceComponent },
  { path: "servicio/editar/:dateID", component: UpdateServiceComponent },
  { path: "estatus-de-servicio/:dateID", component: ServiceTrackerComponent },
  { path: "admin-de-servicio/:dateID", component: ServiceAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
