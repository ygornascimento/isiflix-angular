import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit {

  public mensagem: string;
  public valor: number;
  public textoForm: string;
  public senha: string = "";
  public clicado: boolean;
  
  public constructor() {
    this.mensagem = "Olá Mundo!";
    this.valor = 0;
    this.textoForm = "";
    this.clicado = false;

  }
  
  ngOnInit(): void {
      
  }

  public mudarValor() {
    this.valor++;
    // console.log(this.valor);
  }

  public enviarDados() {
    console.log("Texto do formulário = "+ this.textoForm + "/" + this.senha + "/" + this.clicado);
  }
}
