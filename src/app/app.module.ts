import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NewArticleComponent } from './components/articles/new-article/new-article.component';
import { ArticleComponent } from './components/articles/article/article.component';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {articleReducer} from "./store/reducers/article/article.reducers";
import {ArticleEffects} from "./store/effects/article/article.effects";
import {HttpClientModule} from "@angular/common/http";
import { CommentsComponent } from './components/comments/comments.component';
import { UserComponent } from './components/user/user.component';
import { UpdateArticleComponent } from './components/articles/update-article/update-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    NewArticleComponent,
    ArticleComponent,
    CommentsComponent,
    UserComponent,
    UpdateArticleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('articles', articleReducer),
    EffectsModule.forRoot([ArticleEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
