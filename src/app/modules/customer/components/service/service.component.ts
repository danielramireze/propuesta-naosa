import { AfterViewInit, Component, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';



@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit, AfterViewInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  dateID = null;
  scale = 5;

  constructor(
    private route: ActivatedRoute,
    private ngZone: NgZone
  ) {
  }

  ngOnInit(): void {
    this.dateID = this.route.snapshot.paramMap.get("dateID");
    console.log("Loaded Date ID", this.dateID);
    this.detectScreenSize();
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
