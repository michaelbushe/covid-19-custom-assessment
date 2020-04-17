import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { WelcomePageComponent } from './welcome/welcome-page.component'
import { I18N_PROVIDERS } from '../i18n.service'
import { ButtonModule } from 'primeng/button'

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent }
]

@NgModule({
  declarations: [
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    I18N_PROVIDERS,
  ],
})
export class AssessModule { }
