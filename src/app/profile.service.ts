import { Injectable } from '@angular/core';
// import { from, throwError } from 'rxjs';
import { HttpClient} from '@angular/common/http';
 import { from, throwError } from'rxjs';  
 import {environment} from '../environments'
@Injectable({
  providedIn: 'root'

})
export class ProfileService {

  constructor(private http:HttpClient){}

getGithubRepositories(){
  const username='luciahroyalty101'
  return this.http.get('https://api.github.com/users/${username}/repos').pipe(map(reop=>{

  }),catchError(error=>) {
    return throwError(Error);
  });
}
}

  // private username: string;
  // private api: '5308415a8b81860a1832861243ab85ba5590292f'
  // constructor(private http: Http) { }
  // // console.log('Service is now ready');
  // this.username = 'luciahroyalty101'
// }
// getProfileInfo(){
//   return.thishttp.get("https:/https://api.github.com/users/".this.username.?private api).map(res=>.json(();
// }
// }
