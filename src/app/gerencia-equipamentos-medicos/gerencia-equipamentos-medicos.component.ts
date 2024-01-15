import { Component } from '@angular/core';
import { EquipamentoMedicoService } from '../services/equipamento-medico.service';
import { EquipamentoMedico } from '../models/EquipamentoMedico.model';
import { DatePipe, NgIf } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DataConverter } from '../utils/DataConverter';

@Component({
  selector: 'app-gerencia-equipamentos-medicos',
  standalone: true,
  imports: [DatePipe, TableModule, MatButtonModule, TooltipModule, ProgressSpinnerModule, NgIf],
  providers: [DatePipe],
  templateUrl: './gerencia-equipamentos-medicos.component.html',
  styleUrl: './gerencia-equipamentos-medicos.component.css',
})
export class GerenciaEquipamentosMedicosComponent {
  constructor(
    private equipamentoMedicoService: EquipamentoMedicoService,
  ) {}

  public equipamentos: EquipamentoMedico[] = [];

  public carregandoEquipamentos: boolean = false;

  ngOnInit(): void {
    this.buscarEquipamentosMedicos();
  }

  public buscarEquipamentosMedicos(): void {
    this.carregandoEquipamentos = true;

    this.equipamentoMedicoService
      .listarEquipamentosMedicos()
      .subscribe((dados: any[]) => {
        this.equipamentos = dados.map((equipamento) => ({
          ...equipamento,
          dataAquisicao: DataConverter.formartarData(equipamento.dataAquisicao),
          calibracao: DataConverter.formartarData(equipamento.calibracao),
          dataFabricacao: DataConverter.formartarData(equipamento.dataFabricacao),
          dataUltimaManutencao: DataConverter.formartarData(
            equipamento.dataUltimaManutencao
          ),
        }));

        console.log(this.equipamentos);
        this.carregandoEquipamentos = false;
      });
  }


}
