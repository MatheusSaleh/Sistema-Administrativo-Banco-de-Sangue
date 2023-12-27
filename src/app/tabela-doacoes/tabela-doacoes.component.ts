import { Component } from '@angular/core';
import { DoacaoService } from '../services/doacao.service';
import { Doacao } from '../models/Doacao.model';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-tabela-doacoes',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule],
  templateUrl: './tabela-doacoes.component.html',
  styleUrl: './tabela-doacoes.component.css'
})
export class TabelaDoacoesComponent {

  constructor(private doacaoService: DoacaoService){}

  public doacoes: Doacao[] = [];

  ngOnInit(): void{
    this.buscarInformacoesDoacoes();
  }

  public buscarInformacoesDoacoes(): void{
    this.doacaoService.listarDoacoes().subscribe((dados: Doacao[]) => {
      this.doacoes = dados;
      console.log(dados);
    })
  }
}
