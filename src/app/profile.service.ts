import { Injectable } from '@angular/core';
//  import { from, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { from, throwError } from 'rxjs';
import { environment } from '../environments/environment'
import { Repos } from './repos'
import { Search } from './search'
@Injectable({
  providedIn: 'root'

})
export class ProfileService {


  constructor(private http: HttpClient) {

  }

  getGithubRepositories(term: string) {
    const endpoint = `https://api.github.com/search/repositories?access_token=${environment.Api_Key}&q=${term}`;
    return this.http.get(endpoint);

  }
  getGithubUsers(term: string)
  const endpoint = `https://api.github.com/search/users?access_token=${environment.Api_Key}&q=${term}`;
return this.http.get(endpoint);
}











