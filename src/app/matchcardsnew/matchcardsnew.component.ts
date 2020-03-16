import { TransferService } from './../services/transfer.service';
import { ApiService } from './../services/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matchcardsnew',
  templateUrl: './matchcardsnew.component.html',
  styles: [`
    :host {
      display:block;
      padding: 32px;
      border: 1px solid black;
      border-radius: 8px;
    }
  `]
})
export class MatchcardsnewComponent implements OnInit {//

  data = [];
  @Input() datas;

  constructor(private transferService:TransferService,
    private router: Router) { }

  ngOnInit() {}

}
