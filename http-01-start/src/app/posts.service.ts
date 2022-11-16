import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Post} from "./post.model";
import {catchError, map, tap} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {

    error = new Subject<string>();

    constructor(private http: HttpClient) {
    }

    createAndStorePost(title: string, content: string) {
        const postData: Omit<Post, "id"> = {title: title, content: content};

        this.http
            .post<{ name: string }>(
                'https://angular-complete-guide-d84e7-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
                postData,
                {
                    observe: 'response',
                    headers: new HttpHeaders({"custom_header": 'hello'})
                }
            ).subscribe(responseData => {
            console.log(responseData);
        }, error => {
            this.error.next(error.message);
        });
    }

    fetchPosts(): Observable<Post[]> {
        const searchParams = new HttpParams()
            .append('print', 'pretty');
        return this.http
            .get<{ [key: string]: Post }>('https://angular-complete-guide-d84e7-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
                {
                    params: searchParams,
                    responseType: 'json'
                })
            .pipe(
                map(responseData => {
                        const postsArray: Post[] = [];
                        for (const key in responseData) {
                            if (responseData.hasOwnProperty(key)) {
                                postsArray.push({...responseData[key], id: key});
                            }
                        }
                        return postsArray;
                    },
                    catchError(errorRes => {
                        this.error.next(errorRes.message);
                        //return throwError(errorRes);
                        return undefined;
                    })
                ));
    }

    deletePosts() {
        return this.http
            .delete('https://angular-complete-guide-d84e7-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
                {
                    observe: 'events',
                    responseType: 'text'
                })
            .pipe(tap(event => {
                console.log(event);
                if(event.type === HttpEventType.Sent) {
                    console.log('event sent');
                }
            }));
    }


}