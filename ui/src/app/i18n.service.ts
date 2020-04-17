import { APP_INITIALIZER, LOCALE_ID } from '@angular/core'
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next'
import XHR from 'i18next-xhr-backend'
import {environment} from '../environments/environment'

export function appInit(i18next: ITranslationService): any {
  return () => i18next.use(XHR).init({
    whitelist: ['en'],
    fallbackLng: 'en',
    debug: !environment.production,
    returnEmptyString: false,
    load: 'languageOnly',
    lng: 'en',
    ns: [
      'translation'
    ]
  })
}

export function localeIdFactory(i18next: ITranslationService): string {
  return i18next.language
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  }
]
