import { Component } from '@angular/core';
import { ReceptorService } from '../services/receptor.service';
import { Receptor } from '../models/Receptor.model';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tabela-receptores',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule, ProgressSpinnerModule, NgIf],
  templateUrl: './tabela-receptores.component.html',
  styleUrl: './tabela-receptores.component.css'
})
export class TabelaReceptoresComponent {

  constructor(private receptorService: ReceptorService){}

  public receptores: Receptor[] = [];

  public carregandoReceptores: boolean = false;

  ngOnInit(): void{
    this.buscarReceptores();
  }

  public buscarReceptores(): void{
    this.carregandoReceptores = true;

    this.receptorService.listarReceptores().subscribe((dados: Receptor[]) => {
      this.receptores = dados;
      this.carregandoReceptores = false;
      console.log(this.receptores);
    })
  }

}
