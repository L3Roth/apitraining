import { TransferService } from './../services/transfer.service';
import { HeaderComponent } from './../header/header.component';
import { ApiService } from './../services/api.service';
import { Component, OnInit, AfterViewInit, ViewChild, OnChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

  @ViewChild('header') header;

  constructor(private transfereService: TransferService,
    private router: Router) {  }

  datas:any[];
  matches = [];

  getData() {
    this.matches = this.transfereService.getData().matches;
  }


}
