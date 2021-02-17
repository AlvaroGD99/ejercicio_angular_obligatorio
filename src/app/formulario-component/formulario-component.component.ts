import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../../post.interface'

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent implements OnInit {
  arrFormularios: Post[]
  formulario: FormGroup
  constructor(private postService: PostService) {
    this.arrFormularios = []
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required,
      ]),
      autor: new FormControl('', [
        Validators.required,
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl('', [Validators.required
      ]),
      categoria: new FormControl('', [Validators.required
      ]),
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    localStorage.setItem('formulario', JSON.stringify(this.formulario.value))
    this.formulario.reset();
    this.postService.addPost()
  }
}
