import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { reference } from '@popperjs/core';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private database: AngularFireDatabase) { }

  get(serviceID: string) {
    return this.database.database.ref(`services`).orderByChild("id").equalTo(Number(serviceID)).once("value");
  }

  create(service: Service) {
    let reference = this.database.database.ref(`services`).push();
    service.fid = reference.key;
    return reference.set(service);
  }

  update(serviceID: string, timestamp: number): Promise<any> {
    let now = new Date();

    if (timestamp < now.getTime())
      return Promise.reject();

    return this.database.database.ref(`services/${serviceID}`)
      .transaction(function (value: Service) {
        if (!value) return value;
        if (!value.changes) value.changes = [];

        value.changes.push({ timestamp: now.getTime(), newTimestamp: timestamp });
        value.timestamp = timestamp;
      });
  }

  updateStatus(serviceID: string, status: string): Promise<any> {
    let now = new Date();

    return this.database.database.ref(`services/${serviceID}`)
      .transaction(function (value: Service) {
        if (!value) return value;
        if (!value.HStatus) value.HStatus = [];
        value.HStatus.push({ timestamp: Number(now), status: status });
        value.status=status;
        return value;
      });
  }

  updateComents(serviceID: string, coments: string): Promise<any> {

    return this.database.database.ref(`services/${serviceID}`)
      .transaction(function (value: Service) {
        if (!value) return value;
        if (!value.coments) value.coments = "";
        value.coments=coments;
        return value;
      });
      
  }

  delete(serviceID: string) {
    return this.database.database.ref(`services/${serviceID}`).remove();
  }

  cancel(serviceID: string) {
    return this.database.database.ref(`services/${serviceID}/status`).update("cancelled");
  }
}
