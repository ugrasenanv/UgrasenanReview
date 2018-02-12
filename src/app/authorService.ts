import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import { AUTHORSNAMES, test } from '../app/authors/data.mock'
import 'rxjs/Rx';

export interface AuthorArray {
    name: string;  
  }

@Injectable()
export class AuthorService{    
    autharray: Observable<AuthorArray[]>;
    private _autharray: BehaviorSubject<AuthorArray[]>;
    private dataStore :{
        autharray: AuthorArray[];
    };
   
    constructor(private http : Http){
        this.dataStore= { autharray: [] };
        this._autharray = <BehaviorSubject<AuthorArray[]>> new BehaviorSubject<AuthorArray[]>((null));
        //BehaviorSubject<AuthorArray[]> this.autharray = new BehaviorSubject<AuthorArray[]>(('Test'));
        this.autharray = this._autharray.asObservable();
    }

    loadAll(): Observable<any> {
        return Observable.of(AUTHORSNAMES);
    }

    //getAlldata(): Observable<any> {
    //    return this.http.get('./data.mock').map((res) => {
    //        res.json();
    //    });
    //}
}