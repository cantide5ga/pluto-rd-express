import { Request, Response } from 'express';
import { ApiResponse } from './ApiResponse';
import * as Promise from 'bluebird';

export abstract class Resource {
    protected request: Request;
    
    constructor(request: Request) {
        this.request = request;
    }
    
    protected queryParams<T>(): T {
        return <T>this.request.query;
    }
    
    protected pathParams<T>(): T {
        return <T>this.request.query;
    }
    
    protected bodyParams<T>(): T {
        return <T>this.request['body']; //TODO add to typedef
    }
    
    // public respond(promise: Promise<ApiResponse>): void {
    //     promise
    //     .then(obj => {
    //         this.response.statusCode = obj.code;
    //         this.response.json(obj.payload);        
    //     })
    //     .catch((err: ApiResponse) => {
    //         if(err.code && err.payload) {
    //             this.response.statusCode = err.code;
    //             this.response.json(err.payload); 
    //         } else { //uncaught
    //             this.response.json(err);
    //         }   
    //     });
    // }
}