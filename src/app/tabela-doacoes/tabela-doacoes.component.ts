import { Component } from '@angular/core';
import { DoacaoService } from '../services/doacao.service';
import { Doacao } from '../models/Doacao.model';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tabela-doacoes',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule, ProgressSpinnerModule, NgIf],
  templateUrl: './tabela-doacoes.component.html',
  styleUrl: './tabela-doacoes.component.css'
})
export class TabelaDoacoesComponent {

  constructor(private doacaoService: DoacaoService){}

  public doacoes: Doacao[] = [];

  public carregandoDoacoes: boolean = false;

  ngOnInit(): void{
    this.buscarInformacoesDoacoes();
  }

  public buscarInformacoesDoacoes(): void{
    this.carregandoDoacoes = true;

    this.doacaoService.listarDoacoes().subscribe((dados: Doacao[]) => {
      this.doacoes = dados;

      this.carregandoDoacoes = false;
    })
  }
}
