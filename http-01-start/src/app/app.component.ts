import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from "./post.model";
import {PostsService} from "./posts.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    loadedPosts: Post[] = [];
    isFetching = false;
    error = null;
    private errorSubscription: Subscription;

    constructor(private http: HttpClient,
                private postsService: PostsService) {
    }

    ngOnInit() {
        this.errorSubscription = this.postsService.error.subscribe(errorMessage => this.error = errorMessage);
        this.fetchPosts();
    }

    onCreatePost(postForm) {
        this.postsService.createAndStorePost(postForm.title, postForm.content);
    }

    onFetchPosts() {
        this.fetchPosts();
    }

    private fetchPosts() {
        this.isFetching = true;
        this.postsService.fetchPosts()
            .subscribe(posts => {
                this.isFetching = false;
                this.loadedPosts = posts;
            }, error => {
                console.log(error);
                this.error = error.message;
            });
    }

    onClearPosts() {
        this.postsService.deletePosts()
            .subscribe(() => {
                    this.loadedPosts = [];
                }
            );
    }

    ngOnDestroy() {
        this.errorSubscription.unsubscribe();
    }


}
