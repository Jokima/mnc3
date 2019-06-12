import { Component, OnInit } from '@angular/core';
import { NewtongService } from '../services/newtong/newtong.service';
import { AjusteService } from '../services/ajuste/ajuste.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  constructor(public ng: NewtongService, public aj: AjusteService) {
  }

  ngOnInit() {
  }
}
