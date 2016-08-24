require('dotenv').config();
import * as Express from 'express';
import { EntryResource } from '../entry/EntryResource';
import { KeywordResource } from '../keyword/KeywordResource';
import * as Promise from 'bluebird';
import * as bodyParser from 'body-parser';
import { ApiResponse } from '../common/ApiResponse';

//http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api

const app = Express();
app.use(bodyParser.json());
app.set('json spaces', 2);

app.get('/entry', (req:Express.Request, res:Express.Response) => {
    const resource = new EntryResource(req);
    respond(res, resource.getEntries());
});

app.get('/keyword', (req:Express.Request, res:Express.Response) => {
    const resource = new KeywordResource(req);     
    respond(res, resource.getKeywords());
});


app.post('/entry', (req:Express.Request, res:Express.Response) => {
    const resource = new EntryResource(req);     
    respond(res, resource.postEntry());
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

function respond(response: Express.Response, promise: Promise<ApiResponse>): void {
        promise
        .then(obj => {
            response.statusCode = obj.code;
            response.json(obj.payload);        
        })
        .catch((err: ApiResponse) => {
            if(err.code && err.payload) {
                response.statusCode = err.code;
                this.response.json(err.payload); 
            } else { //uncaught
                this.response.json(err);
            }   
        });
    }