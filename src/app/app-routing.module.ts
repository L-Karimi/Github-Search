import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: '', redirectTo:"/repos", pathMatch:"full"},
  { path: 'repos', component: ReposComponent },
  { path: 'search', component: SearchComponent },
  { path:'**', component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
