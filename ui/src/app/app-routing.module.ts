import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AssessModule } from './assess/assess.module'
import { RouteNotFoundComponent } from './route-not-found-component/route-not-found.component'
import { WelcomePageComponent } from './assess/welcome/welcome-page.component'
import { SetupPageComponent } from './assess/setup/setup-page.component'


const routes: Routes = [
  { path: '**', component: RouteNotFoundComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'setup', component: SetupPageComponent }
]

@NgModule({
  imports: [
    AssessModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
