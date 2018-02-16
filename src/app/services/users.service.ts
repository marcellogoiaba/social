import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import  Utils  from '../utils/utils'

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUsers(filter){
    console.log('service.getUsers', filter);
    return this.http.get('http://localhost:3000/users')
      .map(res => res.json());
  }

  addUser(user){
    return this.http.post('http://localhost:3000/users/register', user)
      .map(res => res.json())
  }

}
