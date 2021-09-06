import { Injectable, OnInit } from '@angular/core';
import { AppService } from './../services/canal.service';

@Injectable()
export class ConfiguradorCanal implements OnInit {

    constructor(private _app: AppService) { }

    ngOnInit() {
    }

}

