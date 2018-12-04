import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PostModule } from './post/post.module';
@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		PostModule,
		MatToolbarModule,
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
