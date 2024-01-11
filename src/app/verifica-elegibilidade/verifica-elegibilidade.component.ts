import { Component } from '@angular/core';
import { Pergunta } from '../models/Pergunta.model';
import { PerguntaParaElegibilidadeService } from '../services/pergunta-para-elegibilidade.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgFor, NgIf } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-verifica-elegibilidade',
  standalone: true,
  imports: [
    ProgressSpinnerModule,
    NgIf,
    NgFor,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './verifica-elegibilidade.component.html',
  styleUrl: './verifica-elegibilidade.component.css',
})
export class VerificaElegibilidadeComponent {
  constructor(
    private perguntaParaElegibilidadeService: PerguntaParaElegibilidadeService
  ) {}

  public perguntas: Pergunta[] = [];

  public carregandoPerguntas: boolean = false;

  public perguntaAtualIndex: number = 0;

  ngOnInit(): void {
    this.buscarInformacoesPerguntas();
  }

  public buscarInformacoesPerguntas(): void {
    this.carregandoPerguntas = true;

    this.perguntaParaElegibilidadeService
      .listarPerguntas()
      .subscribe((dados: Pergunta[]) => {
        this.perguntas = dados;

        this.carregandoPerguntas = false;
      });
  }

  public mostrarProximaPergunta(): void {
    if (this.perguntaAtualIndex < this.perguntas.length - 1) {
      this.perguntaAtualIndex++;
    } else {
      console.log('Questionario Concluido!');
    }
  }
}
