import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent implements OnInit {
  
  @Input() public valorFilho: number = 0;
  @Output() public eventoFilho = new EventEmitter<number>();

  public outroValor: number = 0;
  
  ngOnInit(): void {
    
  }

  public mudaValorFilho(): void {
    this.outroValor += 10;
    this.eventoFilho.emit(this.outroValor);
  }

}
