import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss']
})
export class UpdateServiceComponent implements OnInit {
  dateID = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dateID = this.route.snapshot.paramMap.get("dateID");
  }

}
