import { StaticSymbol } from '@angular/compiler';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
// import { profile } from 'console';
import { ProfileService} from '../profile.service'
import {Search} from '../search'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: any;
  user: any;
  username:any;

  constructor(public pservices: ProfileService) { }
    getUserProfile(user){
      this.pservices.getGithubUsers(user).subscribe(Response=>{
        this.user=Response;
      });
      this.pservices.getGithubRepositories(user).subscribe(repos=>{
        this.repos=repos;
      });
    }
 
  ngOnInit(): void {

this.getUserProfile('luciahroyalty101');
  }
}

