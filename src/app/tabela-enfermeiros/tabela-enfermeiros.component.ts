import { Component } from '@angular/core';
import { Enfermeiro } from '../models/Enfermeiro.model';
import { EnfermeiroService } from '../services/enfermeiro.service';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tabela-enfermeiros',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule, DialogModule, ProgressSpinnerModule, NgIf],
  templateUrl: './tabela-enfermeiros.component.html',
  styleUrl: './tabela-enfermeiros.component.css'
})
export class TabelaEnfermeirosComponent {

  constructor(private enfermeiroService: EnfermeiroService){}

  public enfermeiros: Enfermeiro[] = [];

  visible: boolean = false;

  public visibleDialogExcluirEnfermeiro: boolean = false;

  public carregandoEnfermeiros: boolean = false;

  ngOnInit(): void{
    this.buscarInformacoesEnfermeiros();
  }

  public buscarInformacoesEnfermeiros(): void {
    this.carregandoEnfermeiros = true;

    this.enfermeiroService.listarEnfermeiros().subscribe((dados: Enfermeiro[]) => {
      this.enfermeiros = dados;
      this.carregandoEnfermeiros = false;
    })
  }

  public showDialog(): void {
        this.visible = true;
    }

  public showDialogExcluirEnfermeiro(): void{
    this.visibleDialogExcluirEnfermeiro = true;
  }

  public fecharDialogEditarEnfermeiro(): void{
    this.visible = false;
  }

  public fecharDialogExcluirEnfermeiro(): void{
    this.visibleDialogExcluirEnfermeiro = false;
  }

}
