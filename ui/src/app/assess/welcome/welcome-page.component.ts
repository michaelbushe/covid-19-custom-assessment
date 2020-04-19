import { Component, OnInit } from '@angular/core'

import { Router } from '@angular/router'

@Component({
  selector: 'c19-welcome',
  template: `
    <div class="page-content">
    <title>COVID-19 Symptom Assessment</title>
    <p>
    This an ALPHA application for demo purposes only.  It's has been reviewed by any medical professionals.
    </p>
    <p>
      The intent of this app is to provide any hospital without telehealth facilites an app they can use
      and customize to assess coronovirus candidates without the patient needing to come to the hospital
      and put people at risk of transmission.
    </p>
    <p>

    Future versions of this tool and it's content to be validated by health professionals.
    </p>
    <p>

    This tool is not a doctor and is not providing a diagnosis. You should always speak with a doctor regarding any medical condition.
    </p>
    <p>
    This app is not endorse by the CDC nor the United States Government.
    </p>

    <p-button label="Start Assessment" (onClick)="handleStart($event)" data-test-id="start-assessment-button"></p-button>
    </div>
    `,
  styles: [

  ],
})
export class WelcomePageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  handleStart($event: any) {
    this.router.navigateByUrl('/assess/page-1')
  }
}
