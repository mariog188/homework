import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private idSource = new BehaviorSubject('default message');
	currentId = this.idSource.asObservable();

	changeId(postid: string) {
		this.idSource.next(postid);
	}

	constructor(private http: HttpClient) {}

	getData<T>(url: string) {
		return this.http.get<T>(url);
	}
}
