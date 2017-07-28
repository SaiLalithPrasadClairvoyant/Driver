import { Component, OnInit, NgModule } from '@angular/core';
import { MatterService } from './../matter.service';
import { Matter } from '../matter';
import { ConstantsService } from '../constants.service';
@Component({
  selector: 'app-handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.css'],
  providers: [MatterService],
})
export class HandlerComponent implements OnInit {
  getdata: Matter[] = [];
  id: number;
  title: String;
  body: String;
  eid: number;
  etitle: String;
  ebody: String;
  editindex = ConstantsService.maxposts;
  matter;
  constructor(private matterservice: MatterService) {
  }
  getColor(index): String {
    if (index % 2 === 0) {
      return 'blue';
    } else {
      return 'red';
    }
  }

  loadPosts() {
    this.matterservice.getPosts().subscribe(
      (data) => {
        this.getdata = data;
        console.log(data);
      },
    );
  }
  deletePost(index) {
    this.getdata.splice(index, 1);
    this.matterservice.delpost();
    console.log('Deleting...');
  }
  createPost() {
    console.log(this.id, this.body, this.title);
    this.matter = {
      id: this.id,
      title: this.title,
      body: this.body,
    };
    this.matterservice.createNewPost(this.matter).subscribe(
      data => {
        this.loadPosts();
      }
    );
  }
  updated(index) {
    this.editindex = index;
  }
  updatePost(index) {
    console.log(this.eid);
    const matter = this.getdata[index];
    this.matterservice.updatePost(matter).subscribe(result => console.log(result));
    // this.getdata[index] = matter;
    this.editindex = 10000;
  }
  ngOnInit() {
  }

}
