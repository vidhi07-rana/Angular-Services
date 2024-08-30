import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  log(message:string ){
    const timeStamp = new Date().toLocaleTimeString()
    console.log(`[${timeStamp}]: ${message} `)
  }
}
