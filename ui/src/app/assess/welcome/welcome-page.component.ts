import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'c19-welcome',
	template: `
    <div class="page">
		<div class="page-content">
	    <title>COVID-19 Symptom Assessment</title>
	    <div>
				<p>This an application for demonstration purposes only. Current version is <span class="font-bold">ALPHA</span>.</p><br/> 
				<p>It has not been reviewed by any medical professionals.</p><br/>
	    	<p>The intent of this application is to provide any hospital without telehealth facilites an application
	    	they can customize and use to assess COVID-19 candidates without the patient needing to come 
	    	to the hospital and put people at risk of transmission.</p><br/>
	    	<p>Future versions of this tool and it's content are to be validated by health professionals.</p><br/>
	    	<p>This tool is not a doctor and does not provide a diagnosis. You should always speak 
				with a doctor regarding any medical condition.</p><br/>
	    	<p>This application is not endorsed by the CDC nor the United States Government.</p>
		    <button class="btn" label="Start Assessment" (onClick)="handleStart($event)">Start Assessment</button>
			</div>
    </div>
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
