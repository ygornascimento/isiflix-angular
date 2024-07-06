import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit {

  public mensagem: string;
  public valor: number;
  
  public constructor() {
    this.mensagem = "Olá Mundo!";
    this.valor = 0;
  }
  
  ngOnInit(): void {
      
  }

  public mudarValor() {
    this.valor++;
    // console.log(this.valor);
  }
}
