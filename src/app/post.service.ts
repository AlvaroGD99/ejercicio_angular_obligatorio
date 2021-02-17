import { importType } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Post } from '../post.interface'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: Post[]
  post: Post
  constructor() {
    this.arrPost = []
  }


  getAll() {
    window.location.reload;
    return this.arrPost;
  }

  getByCategory(pCategory) {

  }
  addPost() {

  }
}
