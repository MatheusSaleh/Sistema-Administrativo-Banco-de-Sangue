import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { QuestaoService } from '../services/questao.service';
import { Questao } from '../models/Questao.model';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tabela-questoes',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule, ProgressSpinnerModule, NgIf],
  templateUrl: './tabela-questoes.component.html',
  styleUrl: './tabela-questoes.component.css'
})
export class TabelaQuestoesComponent {

  constructor(private questaoService: QuestaoService){}

  public questoes: Questao[] = [];

  public carregandoQuestoes: boolean = false;

  ngOnInit(): void{
    this.buscarQuestoes();
  }

  public buscarQuestoes(): void{
    this.carregandoQuestoes = true;

    this.questaoService.listarQuestoes().subscribe((dados: Questao[]) => {
      this.questoes = dados;
      this.carregandoQuestoes = false;
    })
  }
}
