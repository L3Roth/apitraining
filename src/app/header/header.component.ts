import { ApiService } from './../services/api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TransferService } from '../services/transfer.service';
import { LandingpageComponent } from '../landingpage/landingpage.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  compTierOne: any;
  matchTierOne: any;

  dateValue: any;
  compValueId: number;
  constructor(private apiservice: ApiService,
              private trasferService: TransferService,
              private landing: LandingpageComponent) { }

  selectEvent() {  }

  OnDateChange(event) {
    this.dateValue = event;
    this.dateValue = this.formatDate(this.dateValue);
  }

  formatDate(date:Date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  executeSearch() {
    this.apiservice.getMatchData(this.compValueId, this.dateValue).subscribe(response => {
      this.matchTierOne = response;
      this.trasferService.setData(this.matchTierOne);
      console.log(this.matchTierOne.matches);
      this.landing.getData();
    })
  }

  ngOnInit() {
    this.apiservice.getCompetitionData().subscribe(response => {
      this.compTierOne = response.competitions;
    })

  }

}
