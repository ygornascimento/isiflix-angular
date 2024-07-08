import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-rotacustom',
  templateUrl: './rotacustom.component.html',
  styleUrl: './rotacustom.component.css'
})
export class RotacustomComponent implements OnInit {

  public idRecebido: string = "";
  
  public constructor(private activateRoute: ActivatedRoute, private router: Router) {

  }
  
  public ngOnInit(): void {
    this.idRecebido = this.activateRoute.snapshot.params['id'];
    console.log("Id Recebido na rota  = " + this.idRecebido);
  }

  public navegar(): void {
    this.router.navigate(['/']);
  }
}
