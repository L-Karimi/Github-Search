import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, throwError } from 'rxjs';
import { environment } from '../environments/environment';

import { Repos } from './repos'
import { Search } from './search'
@Injectable({
  providedIn: 'root'

})
export class ProfileService {


  constructor(private http: HttpClient) {

  }
  getGithubUsers(user) {
    return this.http.get ('https://api.github.com/users/'+user+'?access_token='+environment.apiKey)
    
  }
  getGithubRepositories(user) {
    return this.http.get ('https://api.github.com/users/'+user+'/repos'+'?access_token='+ environment.apiKey)

  }
  
}