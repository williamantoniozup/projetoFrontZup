import { GenericHttpService } from '../generic-http.service';
import { Injectable } from "@angular/core";


@Injectable()

export class GenericSandboxService{

    constructor(private httpRequest: GenericHttpService){}
}