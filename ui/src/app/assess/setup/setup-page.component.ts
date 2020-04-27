import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppData } from '../../AppData';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'c19-setup',
  template: `
  <div class="page">
	<div class="page-content">
		<title>COVID-19 Symptom Assessment-Initial Setup</title>
		<div>
			<p>Scan medical records for any of the following comorbidities&#x003A;</p>
			<div class="comorbidities">
				<div>
					<p-checkbox
						name="comorbidities" 
						value="Asthma" label="Asthma"
						inputId="como1"></p-checkbox>
				</div>
				<div>
					<p-checkbox 
						name="comorbidities" 
						value="CardiovascularDisease" label="Cardiovascular Disease" 
						inputId="como2"></p-checkbox>
				</div>
				<div>
					<p-checkbox
						name="comorbidities"
						value="COPD" label="COPD"
						inputId="como3"></p-checkbox>
				</div>
				<div>
					<p-checkbox
						name="comorbidities"
						value="Diabetes" label="Diabetes"
						inputId="como4"></p-checkbox>
				</div>
				<div>
					<p-checkbox
						name="comorbidities" value="KidneyOrLiverDisease"
						label="Kidney or Liver Disease"
						inputId="como5"></p-checkbox>
				</div>
				<div>
					<p-checkbox
						name="comorbidities" value="Pregnancy"
						label="Pregnancy"
						inputId="como6"></p-checkbox>
				</div>
				<div>
					<p-checkbox
						name="comorbidities" value="Smoking"
						label="Smoking"
						inputId="como7"></p-checkbox>
				</div>
			</div>
			<p>Check any that apply and press Next.</p><br/>
			<p>These are the current &quot;Stay-at-Home&quot; recommendations to pass along.<br/><a href="http://bit.ly/ukgovisol">http://bit.ly/ukgovisol</a></p>
		</div>
		<button p-button class="btn" label="Start Over" (click)="handleStart('startOver')">Start Over</button>
		<button p-button class="btn" label="Next" (click)="handleNext('next')">Next</button>
	</div>
  </div>
  `,
  styles: [
  ]
})

export class SetupPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  
	handleStart($event: any) {
		this.router.navigateByUrl('/welcome')
	}
	
	handleNext($event: any) {
		this.router.navigateByUrl('/setup')
	}
}
