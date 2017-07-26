import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Matter } from './matter';
import { ConstantsService } from './constants.service';

@Injectable()
export class MatterService {
    constructor(private http: Http, ) {
    }
    getPosts(): Observable<Matter[]> {
        return this.http.get(ConstantsService.producturl)
            .map((response: Response) => <Matter[]>response.json());
    }
    delpost() {
        return this.http.delete(ConstantsService.producturl + '/1')
            .do(data => console.log(JSON.stringify(data)));
    }
    createNewPost(matter) {
        return this.http.post(ConstantsService.producturl, matter)
            .map((res: Response) => <Matter[]>res.json())
            .do(data => console.log(JSON.stringify(data)));
    }
    updatePost(matter) {
        return this.http.patch(ConstantsService.producturl + '/1', matter)
            .map((res: Response) => <Matter[]>res.json())
            .do(data => console.log(JSON.stringify(data)));
    }
}
