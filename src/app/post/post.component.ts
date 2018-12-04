import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.css' ],
})
export class PostComponent implements OnInit {
	url = 'https://jsonplaceholder.typicode.com/posts';
	posts$: Observable<Post[]>;
	postId;
	constructor(private apiservice: ApiService) {
		this.posts$ = apiservice.getData<Post[]>(this.url);
	}

	ngOnInit() {
		this.apiservice.currentId.subscribe(
			(message) => (this.postId = message),
		);
	}

	SendId(postid) {
		this.apiservice.changeId(postid);
	}

	Hide() {
		this.postId = '';
	}
}
