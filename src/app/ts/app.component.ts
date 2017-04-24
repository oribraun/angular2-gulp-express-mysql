/**
 * Created by ori on 4/12/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './entities/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    template: `<h1>{{name}}</h1>
                <ul>
                <li *ngFor="let user of users; let i = index">{{user.email}}</li>
                </ul>
                <div *ngIf="errorMessage">error: {{errorMessage}}</div>`,
})
export class AppComponent implements OnInit {
    private usersUrl:string = 'http://localhost:3000/api/getAllUsers';  // URL to web API
    private users: Object = [];
    private errorMessage:string;
    private name:string = 'Users List';
    constructor (private http: Http) {}
    getAllUsers(): Observable<any> {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    ngOnInit() {
        this.getAllUsers().subscribe(
            data => {
                if(data.err) {
                    this.errorMessage = data.errdesc;
                } else {
                    this.users = <User[]>data.users
                }
                for(let u of this.users) {
                    console.log(u.email);
                }
            },
            error =>  this.errorMessage = <any>error
        );
    }
}
