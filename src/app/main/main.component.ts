import { Component, OnInit } from '@angular/core';
import { NewtongService } from '../services/newtong/newtong.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  metodo: any;
  ponto: number;

  x = [0, 0, 0, 0];

  fx = [0, 0, 0, 0];

  result: any;

  constructor(public ng: NewtongService) { }

  ngOnInit() {
  }

  calcularMetodo(metodo) {
    if (metodo === 'newtong' || metodo === 'newton') {
      this.result = this.ng.interpolacao(this.x, this.fx, this.ponto, metodo);
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
