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
    if (!localStorage.getItem('arrPost')) {
      console.log('adioss');

      localStorage.setItem('arrPost', JSON.stringify(this.arrPost))
      this.arrPost.push(JSON.parse(localStorage.getItem('formulario')))
      localStorage.setItem('arrPost', JSON.stringify(this.arrPost))

    }
    else {
      console.log('hola');

      this.arrPost = JSON.parse(localStorage.getItem('arrPost'))
      this.arrPost.push(JSON.parse(localStorage.getItem('formulario')))
      localStorage.setItem('arrPost', JSON.stringify(this.arrPost))

    }
  }
}
