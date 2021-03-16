// Service creeat cu comanda "ng g s api"

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Accesarea datelor cu Url-ul dat

export class ApiService {

  // Url-ul salvat intr-o variabila pentru a putea fi folosit mai usor

  url = "https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22"
  
  constructor(private http:HttpClient) { }
  getApi() {
    return this.http.get(this.url);
  }
}

// Este nevoie de CORS chrome extension pentru access-control-allow-origin


