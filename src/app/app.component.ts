import { Component } from '@angular/core';
import { Matter } from './matter';
import { MatterService } from './matter.service';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MatterService]
})

export class AppComponent {
  matter: Matter[];
  title = 'Angular';
  constructor(private matterservice: MatterService) {
  }
  ngOnInit(): void {
    this.matterservice.getPosts()
      .subscribe(matpro => this.matter = matpro);
  }
}
