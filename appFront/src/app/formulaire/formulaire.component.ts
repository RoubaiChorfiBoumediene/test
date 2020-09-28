import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Message {
	subject: string;
	text: string;
	email: string;
}
@Component({
	selector: 'app-formulaire',
	templateUrl: './formulaire.component.html',
	styleUrls: [ './formulaire.component.css' ]
})
export class FormulaireComponent implements OnInit {
	public subject: string;
	public text: string;
	public email: string;
	constructor(private http: HttpClient) {}
	sendMail() {
		var mailData = {
			subject: this.subject,
			message: this.text,
			email: this.email
		};

		this.http.post('/email', mailData).subscribe((data) => {
			var response = data;
		});
	}
	ngOnInit() {}
}
