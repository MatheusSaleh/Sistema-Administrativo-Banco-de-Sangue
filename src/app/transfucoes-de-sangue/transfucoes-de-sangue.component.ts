import { Component } from '@angular/core';
import { TransfusaoService } from '../services/transfusao.service';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';
import { Transfusao } from '../models/Transfusao.model';

@Component({
  selector: 'app-transfucoes-de-sangue',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule, ProgressSpinnerModule, NgIf],
  templateUrl: './transfucoes-de-sangue.component.html',
  styleUrl: './transfucoes-de-sangue.component.css'
})
export class TransfucoesDeSangueComponent {

  constructor(private trasfusaoService: TransfusaoService){}

  public carregandoTransfusoes: boolean = false;

  public transfusoes: Transfusao[] = [];

  ngOnInit(): void{
    this.buscarTransfusoes();
  }

  public buscarTransfusoes(): void{
    this.carregandoTransfusoes = true;

    this.trasfusaoService.listarTransfusoes().subscribe((dados: Transfusao[]) => {
      this.transfusoes = dados;
      this.carregandoTransfusoes = false;
    })
  }

}
