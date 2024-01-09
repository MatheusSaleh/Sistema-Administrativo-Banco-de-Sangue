import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';
import { Doador } from '../models/Doador.model';
import { DoadorService } from '../services/doador.service';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-tabela-doadores',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule],
  templateUrl: './tabela-doadores.component.html',
  styleUrl: './tabela-doadores.component.css'
})
export class TabelaDoadoresComponent {

  constructor(private doadorService: DoadorService){}

  public doadores: Doador[] = [];

  ngOnInit(): void{
    this.buscarInformacoesDoadores();
  }

  public buscarInformacoesDoadores(): void{
    this.doadorService.listarDoadores().subscribe((dados: Doador[]) => {
      this.doadores = dados;
      console.log(dados);
    })
  }

}
