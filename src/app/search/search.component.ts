import { StaticSymbol } from '@angular/compiler';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';



import { Component, OnInit } from '@angular/core';
import {ProfileService}from '../profile.service'


@Component({
  selector: 'app-search',
  templateUrl:'./search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: any[]= [];

  constructor(public pservices: ProfileService) { }

  ngOnInit(): void {
    this.pservices.getGithubUsers("luciahroyalty101")
    .subscribe((response: any)=>
    this.search=response.items)
  }

}
