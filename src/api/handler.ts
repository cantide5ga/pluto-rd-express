import * as Express from 'express';
import { EntryResource } from '../entry/EntryResource';
import { KeywordResource } from '../keyword/KeywordResource';

const app = Express();

app.get('/entry', (req:Express.Request, res:Express.Response) => {
    const resource= new EntryResource();    
    res.send(resource.getEntries(req));
});

app.get('/keyword', (req:Express.Request, res:Express.Response) => {
    const resource = new KeywordResource();     
    res.send(resource.getResponse());
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});