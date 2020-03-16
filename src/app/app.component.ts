import { Component } from '@angular/core';
//import { FootballApiService } from './services/footballapi.service';

//import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {} //private _footballApiService: FootballApiService

  //listcomments: Comments[];

  /*ngOnInit() {
    this._footballApiService.getComments()
      .subscribe
      (
        data => {
          this.listcomments = data;
          return this.listcomments;
        }
      );
  }*/
}
