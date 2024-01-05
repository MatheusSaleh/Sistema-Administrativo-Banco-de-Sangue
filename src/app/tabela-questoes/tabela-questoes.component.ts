import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { QuestaoService } from '../services/questao.service';
import { Questao } from '../models/Questao.model';

@Component({
  selector: 'app-tabela-questoes',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule],
  templateUrl: './tabela-questoes.component.html',
  styleUrl: './tabela-questoes.component.css'
})
export class TabelaQuestoesComponent {

  constructor(private questaoService: QuestaoService){}

  public questoes: Questao[] = [];

  ngOnInit(): void{
    this.buscarQuestoes();
    console.log('Passei por aqui ')
  }

  public buscarQuestoes(): void{
    this.questaoService.listarQuestoes().subscribe((dados: Questao[]) => {
      this.questoes = dados;
      console.log(this.questoes);
    })
  }
}
