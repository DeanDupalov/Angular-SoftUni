import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  isLogged: boolean = false;

  constructor() { }

  login(): void {
    this.isLogged = true;
  }

  logout(): void {
    this.isLogged = false;
  }
}
