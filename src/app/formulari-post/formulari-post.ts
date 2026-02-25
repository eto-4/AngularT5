import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostServiceTs } from '../Services/post.service.ts';
import { Post } from '../Models/Post';
import { CommonModule } from '@angular/common';
import { DescomptePipe } from '../Pipes/descompte-pipe.js';

@Component({
  selector: 'app-formulari-post',
  standalone: true,
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, DescomptePipe],
  templateUrl: './formulari-post.html',
  styleUrl: './formulari-post.css',
})
export class FormulariPost {
  post: Post | null = null;
  missatgeBuscar: string = '';
  missatgeAfegir: string = '';
  searchId: number = 0;

  postForm: FormGroup;

  constructor(private postService: PostServiceTs, private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.postForm = this.fb.group({
      userId: [1, [Validators.required, Validators.min(1)]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      body: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  buscarPost() {
    // Si l'id es null no fer cap request.
    this.postService.getPostById(this.searchId).subscribe({
      next: (post) => {
        this.post = post;
        this.cdr.detectChanges();
      },
      error: () => {
        this.missatgeBuscar = 'Error al buscar el post';
        this.missatgeBuscar = '';
      }
    });
  }

  afegirPost() {
    if (this.postForm.valid) {
      const nouPost: Post = this.postForm.value;
      this.postService.addPost(nouPost).subscribe({
        next: () => {
          this.missatgeAfegir = 'Post afegit correctament';
          this.cdr.detectChanges();
        },
        error: () => {
          this.missatgeAfegir = 'Error a l\'hora d\'afegir el post';
          this.missatgeAfegir = '';
        }
      });
    }
  }

  get userIdError(): boolean {
    const control = this.postForm.get('userId');
    return !!(control?.invalid && control?.touched);
  }

  get titleError(): boolean {
    const control = this.postForm.get('title');
    return !!(control?.invalid && control?.touched);
  }

  get bodyError(): boolean {
    const control = this.postForm.get('body');
    return !!(control?.invalid && control?.touched);
  }
}
