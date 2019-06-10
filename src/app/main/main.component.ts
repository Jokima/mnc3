import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  metodos = ['Newton', 'Newton-Gregory', 'Ajuste'];

  ptos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  x = [];
  y = [];
  matriz = [];

  metodo: any;

  constructor() { }

  ngOnInit() {
  }

  numPtos(pts) {
    this.x.splice(0);
    this.y.splice(0);
    for (let i = 0; i < pts; i++) {
      this.x.push({
        x: 0
      });
      this.y.push({
        y: 0
      });
    }
  }

  selectMetodo(m) {
    this.metodo = m;
  }

  resolveMetodo(m, pts) {
    console.log(m);
    if (m === 'Newton-Gregory') {
      this.newtonGregory(pts);
    }
  }

  newtonGregory(pts) {
    this.matriz.splice(0);
    console.log(this.x, this.y);
    for (let i = 0; i < pts - 1; i++) {
      for (let j = 0; j < pts; j++) {
        this.matriz.push({
          fx: this.y[i + 1].y - this.y[i].y
        });
      }
    }
    console.log(this.matriz);
  }

}
