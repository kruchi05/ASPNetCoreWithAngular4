﻿import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    _apiURI: string;

    constructor() {
        this._apiURI = 'http://localhost:54390/api';
    }

    getApiURI() {
        return this._apiURI;
    }
}