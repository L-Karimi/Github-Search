// import { StaticSymbol } from '@angular/compiler';
// import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

import { Component, EventEmitter, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchGithubUser: any
  @Output() searchGitUser = new EventEmitter<any>();

  searchUser() {
    this.searchGitUser.emit(this.searchGithubUser)
  }




  constructor() { }

  ngOnInit(): void {

  }

}

