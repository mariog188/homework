import { CommentComponent } from './comment.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ CommentComponent ],
	imports: [ CommonModule, MatCardModule ],
	exports: [ CommentComponent ],
})
export class CommentModule {}
