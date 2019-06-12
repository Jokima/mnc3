import { Component, OnInit } from '@angular/core';
import { NewtongService } from '../services/newtong/newtong.service';
import { AjusteService } from '../services/ajuste/ajuste.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  metodo: any;
  ponto: number;

  numpontos: number;

  x = [];

  fx = [];

  result: any;

  constructor(public ng: NewtongService, public aj: AjusteService) { }

  ngOnInit() {
  }

  calcularMetodo(metodo) {
    if (metodo === 'newtong' || metodo === 'newton') {
      this.result = this.ng.interpolacao(this.x, this.fx, this.ponto, metodo);
    }
    if (metodo === 'ajuste') {
      this.result = this.aj.ajuste(this.x, this.fx, this.numpontos);
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  resetar() {
    this.result = undefined;
    this.ng.dataSource = undefined;
    this.aj.dataSource = undefined;
    this.ponto = undefined;
    this.numpontos = undefined;
  }

  montarArray(n) {
    this.x.splice(0);
    this.fx.splice(0);
    for (let i = 0; i < n; i++) {
      this.x.push(0);
      this.fx.push(0);
    }
  }

}
