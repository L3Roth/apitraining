import { HeaderComponent } from './../header/header.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiKey = '72b3e32008ee4400bf43ed3a7eaf93e8';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private readonly http: HttpClient) {}

    public getCompetitionData(): Observable<any> {
        const opts = {
            headers: new HttpHeaders({
                'X-Auth-Token': apiKey
            })
        };
        return this.http.get('http://api.football-data.org//v2/competitions?plan=TIER_ONE', opts);
    }

    public getMatchData(compId: number, compDate: string): Observable<any> {
        const opts = {
            headers: new HttpHeaders({
                'X-Auth-Token': apiKey
            })
        };
        console.log(compId);
        console.log(compDate);
        // tslint:disable-next-line: max-line-length
        return this.http.get('http://api.football-data.org/v2/competitions/'+compId+'/matches?dateFrom/dateTo='+compDate , opts);
    }
}