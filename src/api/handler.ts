import * as Express from 'express';
import { EntryResource } from '../entry/EntryResource';
import { KeywordResource } from '../keyword/KeywordResource';
import * as Promise from 'bluebird';

const app = Express();

app.get('/entry', (req:Express.Request, res:Express.Response) => {
    const resource= new EntryResource();
    resolve(res, resource.getEntries(req));
});

app.get('/keyword', (req:Express.Request, res:Express.Response) => {
    const resource = new KeywordResource();     
    resolve(res, resource.getResponse());
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

function resolve(response: Express.Response, promise: Promise<string>) {
    promise
    .then(json => {
        response.send(json);
    })
    .catch(err => {
        response.send(err);    
    });
}