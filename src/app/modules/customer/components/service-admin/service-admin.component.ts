import { AfterViewInit, Component, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { CustomerService } from "../../common/services/customer.service"
import { Service } from "../../common/models/service"


@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrls: ['./service-admin.component.scss']
})

export class ServiceAdminComponent implements OnInit {

  form: FormGroup = new FormGroup({
    coments: new FormControl("", [Validators.required,]),
  });

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  dateID = null;
  scale = 5;
  currentService: Service;
  statusOptions = [
    { id: 0, name: "Cita asignada" },
    { id: 1, name: "En Registro Linea de Servicio" },
    { id: 2, name: "En Sevicio (Multipuntos)" },
    { id: 3, name: "En Sevicio (En Espera de Autorizaion)" },
    { id: 4, name: "En Sevicio (En Espera de Refacciones)" },
    { id: 5, name: "En Sevicio (En Proceso)" },
    { id: 6, name: "En Lavado" },
    { id: 7, name: "En Control de Calidad" },
    { id: 8, name: "Listo Para Entrega" },
    { id: 9, name: "Entregado" },
  ]
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
    private customerService: CustomerService,
  ) {

  }

  ngOnInit(): void {

    this.dateID = this.route.snapshot.paramMap.get("dateID");
    //console.log("Loaded Date ID", this.dateID);
    this.detectScreenSize();
    this.customerService.get(this.dateID).then(data => {//traer la info del servicio
      if (data.val()) {
        this.currentService = data.val()[Object.keys(data.val())[0]];
      }
    }
    );

  }

  initForm() {
    this.form.setValue({
      coments: "",
    });
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

  statusChange(status: string) {//cambia el estado del servicio
    this.customerService.updateStatus(this.currentService.fid, status);
    this.customerService.get(this.dateID).then(data => {//traer la info del servicio
      if (data.val()) {
        this.currentService = data.val()[Object.keys(data.val())[0]];
      }
    }
    );
  }

  comentsUpdate() {
    if (this.form.get("coments").value) {

      this.customerService.updateComents(this.currentService.fid, this.form.get("coments").value);
      this.customerService.get(this.dateID).then(data => {//traer la info del servicio
        if (data.val()) {
          this.currentService = data.val()[Object.keys(data.val())[0]];
        }
      }
      );

    }

  }
}
