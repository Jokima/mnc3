import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjusteService {

  displayedColumns = ['x', 'fx', 'xy', 'x2', 'ychapeu', 'e', 'e2'];
  dataSource: any;

  constructor() { }

  ajuste(x, fx, n) {
    const response = [];
    let ex = 0;
    let ey = 0;
    const xy = [];
    let exy = 0;
    const x2 = [];
    let ex2 = 0;
    let a = 0;
    let b = 0;
    const y2 = [];
    let ey2 = 0;
    const ychapeu = [];
    const e = [];
    const e2 = [];
    let ee2 = 0;
    let r2 = 0;
    for (let i = 0; i < x.length; i++) {
      ex = ex + x[i];
      ey = ey + fx[i];
      xy.push(x[i] * fx[i]);
      x2.push(x[i] * x[i]);
      exy = exy + xy[i];
      ex2 = ex2 + x2[i];
    }
    a = ((n * exy) - (ex * ey)) / ((n * ex2) - (ex * ex));
    b = ((ex * exy) - (ey * ex2)) / ((ex * ex) - (n * ex2));
    for (let i = 0; i < x.length; i ++) {
      y2.push(fx[i] * fx[i]);
      ey2 = ey2 + y2[i];
      ychapeu.push(b + (a * x[i]));
      e.push(ychapeu[i] - fx[i]);
      e2.push(e[i] * e[i]);
      ee2 = ee2 + e2[i];
    }
    r2 = 1 - (ee2 * n) / ((n * ey2) - (ey * ey));
    for (let i = 0; i < x.length; i++) {
      response.push({
        rx: x[i],
        rfx: fx[i],
        rxy: xy[i],
        rx2: x2[i],
        re: e[i],
        re2: e2[i],
        rychapeu: ychapeu[i]
      });
    }
    this.dataSource = response;
    return r2;
  }
}
