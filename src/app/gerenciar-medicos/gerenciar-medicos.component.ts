import { Component } from '@angular/core';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../models/Medico.model';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-gerenciar-medicos',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule, DialogModule, ProgressSpinnerModule, NgIf],
  templateUrl: './gerenciar-medicos.component.html',
  styleUrl: './gerenciar-medicos.component.css',
})
export class GerenciarMedicosComponent {
  constructor(private medicoService: MedicoService) {}

  public medicos: Medico[] = [];

  public carregandoInformacoesMedicos: boolean = false;

  ngOnInit(): void{
    this.buscarInformacoesMedicos();
  }

  public buscarInformacoesMedicos(): void{
    this.carregandoInformacoesMedicos = true;

    this.medicoService.listarMedicos().subscribe((dados: Medico[]) => {
      this.medicos = dados;
      this.carregandoInformacoesMedicos = false;

      console.log(this.medicos);
    })
  }
}
