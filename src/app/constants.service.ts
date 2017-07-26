import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  static readonly producturl = 'https://jsonplaceholder.typicode.com/posts';
  static readonly maxposts = 1000;
  constructor() { }

}
