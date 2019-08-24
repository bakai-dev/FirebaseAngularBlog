import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private postService: PostsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {

    })
  }

}
