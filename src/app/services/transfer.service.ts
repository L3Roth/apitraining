import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TransferService {
    constructor(
        private router:Router,
    ) {}

    private data;

    setData(data) {
        console.log(data)
        this.data = data;
    }

    getData() {
        return this.data;
    }

    clearData() {
        this.data = undefined;
    }
}