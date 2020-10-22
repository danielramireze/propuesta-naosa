import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CustomerService } from './common/services/customer.service';
import { ServiceComponent } from './components/service/service.component';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QRCodeModule } from 'angularx-qrcode';
import { MatMenuModule } from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateServiceComponent } from './components/update-service/update-service.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { ServiceTrackerComponent } from './components/service-tracker/service-tracker.component';
import { ServiceAdminComponent } from './components/service-admin/service-admin.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import 'hammerjs';
import 'mousetrap';
import {GalleryModule} from '@ks89/angular-modal-gallery';
import { CarruselComponent } from './components/service-tracker/carrusel/carrusel.component';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [ServiceComponent, UpdateServiceComponent, ServiceTrackerComponent, ServiceAdminComponent, CarruselComponent],
  imports: [
    //prueba
    ScrollingModule,
    //----
    CommonModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //Dropzone
    NgxDropzoneModule,
    //GALLERY
    GalleryModule.forRoot(),
    //REDUX
    StoreModule.forRoot({}),
    // BOOTSTRAP
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    // QR CODE GENERATOR
    QRCodeModule,
    MatDatepickerModule,
    RouterModule,
    MatInputModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule { }
