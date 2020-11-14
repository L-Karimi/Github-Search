import { StaticSymbol } from '@angular/compiler';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: any[]= [];

  constructor(public pservices: ProfileService) { }
    // username='name'
    // Repositories='repos'
 
  ngOnInit(): void {
      this.pservices.getGithubRepositories("lucy")
      .subscribe((response: any)=>
      this.repos=response.items)
  }

}
