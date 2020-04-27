import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { I18NextModule } from 'angular-i18next'
import { I18N_PROVIDERS } from './i18n.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { ErrorHandler, NgModule } from '@angular/core'
import { AppErrorHandler } from './AppErrorHandler'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    I18NextModule.forRoot(),
    RouterModule
  ],
  providers: [
    I18N_PROVIDERS,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
