import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {

  reload: number
  posts: any
  constructor(private postServie: PostService) {
    this.reload = 0;
  }

  ngOnInit(): void {
    this.posts = this.postServie.getAll();
  }



  onChange($event) {
    if ($event.target.value === 'todos') {
      this.posts = this.postServie.getAll()
    } else {
      this.posts = this.postServie.getByCategory($event.target.value)
    }
  }
}
