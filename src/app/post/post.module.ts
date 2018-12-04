import { CommentModule } from '../comment/comment.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';

@NgModule({
	declarations: [ PostComponent ],
	imports: [
		CommonModule,
		CommentModule,
		MatCardModule,
		MatButtonModule,
	],
	exports: [ PostComponent ],
})
export class PostModule {}
