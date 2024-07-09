import { Component, OnInit } from '@angular/core';
import { PostService } from '../../servicos/post.service';
import { Post } from '../../model/Post';
import { Console } from 'console';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component implements OnInit{

  public lista: Post[];
  public loading: boolean;

  public constructor(private service: PostService) {
    this.lista = [];
    this.loading = false;
  }
  
  public ngOnInit(): void {
    this.loading = true;
    this.service.consumirPosts().subscribe({
      next: (res: Post[]) => {
        console.log("Sucesso!");
        this.lista = res;
        this.loading = false;
      },
      error: (err: any) => {
        console.log("ERROR!");
        console.log(err);
        this.loading = false;
      }
    });
  }

  public enviarDados(): void {
    let postagem: Post = new Post();
    postagem.body = "Teste do Ygor tentando fazer a comunicação com o JSONPlaceholder";
    postagem.title = "Teste do Ygor";
    postagem.userId = 1;

    this.service.adicionarPos(postagem).subscribe({
      next: (res: Post) => {
        console.log("Post Adicionado!");
        console.log(res);
      },

      error: (err: any) => {
        console.log("Erro ao adicionar mensagem!");
        console.log(err);
      }
    })
  }


}
