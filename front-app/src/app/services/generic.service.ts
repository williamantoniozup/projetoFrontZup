import { Injectable } from  '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})

export class GenericService{
    _environment: any;

    constructor(){
        this._environment = environment;
    }

    public getUrlApi(): string {
        return this._environment.URL_AP
    }
}