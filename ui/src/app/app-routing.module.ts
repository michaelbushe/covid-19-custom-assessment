import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AssessModule } from './assess/assess.module'
import { RouteNotFoundComponent } from './route-not-found-component/route-not-found.component'


const routes: Routes = [
  { path: '**', component: RouteNotFoundComponent }
]

@NgModule({
  imports: [
    AssessModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
