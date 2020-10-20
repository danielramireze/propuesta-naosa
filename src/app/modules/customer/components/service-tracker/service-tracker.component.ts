import { AfterViewInit, Component, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { CustomerService } from "../../common/services/customer.service"
import { Service } from "../../common/models/service"

@Component({
  selector: 'app-service-tracker',
  templateUrl: './service-tracker.component.html',
  styleUrls: ['./service-tracker.component.scss']
})

export class ServiceTrackerComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  dateID = null;
  scale = 5;
  currentService:Service;
/*   Asesor de servicios-
  - Técnico que lo este trabajando-
  - Estatus-
  - Añadir linea de estados-
  - Fecha y hora de entrega estimada (Es un caampo de la base de datos)-
  - Accedder a fotos de inventario
  - Comentarios adicionales-
  - Agregar firma de cotizacion 
  - Agregar cotizacion en PDF */

  constructor(
    private route: ActivatedRoute,
    private customerService:CustomerService,
  ) {
    
   }

  ngOnInit(): void {
    
    this.dateID = this.route.snapshot.paramMap.get("dateID");
    //console.log("Loaded Date ID", this.dateID);
    this.detectScreenSize();
    this.customerService.get(this.dateID).then(data => {//traer la info del servicio
      if(data.val()){
        this.currentService=data.val()[Object.keys(data.val())[0]];}
      }
    );
    
  }

  ngAfterViewInit(): void {
  }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }

  detectScreenSize() {
    let newScale = Math.round(window.innerWidth / 80);
    switch (true) {
      case newScale > 13:
        newScale = 13;
        break;
      case newScale < 5:
        newScale = 5;
        break;
    }
    this.scale = newScale;
  }

}
