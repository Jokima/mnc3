import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewtongService {
  displayedColumns: string[] = ['x', 'fx', 'fx1', 'fx2', 'fx3'];
  dataSource: any;

  constructor() {}

  interpolacao(x, fx, ponto, metodo) {
    const h = x[1] - x[0];
    const fx1 = [];
    const fx2 = [];
    const fx3 = [];
    for (let i = 1; i < fx.length; i++) {
      if (metodo === 'newtong') {
        fx1.push(fx[i] - fx[i - 1]);
      } else {
        fx1.push(((fx[i] - fx[i - 1]) / (x[i] - x[i - 1])));
      }
    }
    for (let i = 1; i < fx1.length; i++) {
      if (metodo === 'newtong') {
        fx2.push(fx1[i] - fx1[i - 1]);
      } else {
        fx2.push(((fx1[i] - fx1[i - 1]) / (x[i + 1] - x[i - 1])));
      }
    }
    for (let i = 1; i < fx2.length; i++) {
      if (metodo === 'newtong') {
        fx3.push(fx2[i] - fx2[i - 1]);
      } else {
        fx3.push(((fx2[i] - fx2[i - 1]) / (x[i + 2] - x[i - 1])));
      }
    }
    let funcao: any;
    if (metodo === 'newtong') {
      funcao =
      fx[0] +
      fx1[0] * (ponto - x[0]) +
      (fx2[0] / 2) * h * (ponto - x[0]) * (ponto - x[1]) +
      (fx3[0] / 6) * h * (ponto - x[0]) * (ponto - x[1]) * (ponto - x[2]);
    } else {
      funcao =
      fx[0] +
      fx1[0] * (ponto - x[0]) +
      fx2[0] * (ponto - x[0]) * (ponto - x[1]) +
      fx3[0] * (ponto - x[0]) * (ponto - x[1]) * (ponto - x[2]);
    }
    const response = [];
    for (let i = 0; i < x.length; i++) {
      response.push({
        rx: x[i],
        rfx: fx[i],
        rfx1: fx1[i] || null,
        rfx2: fx2[i] || null,
        rfx3: fx3[i] || null
      });
    }
    this.dataSource = response;
    return funcao;
  }
}
