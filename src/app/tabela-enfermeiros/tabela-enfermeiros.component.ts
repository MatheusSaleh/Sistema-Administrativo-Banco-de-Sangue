import { Component } from '@angular/core';
import { Enfermeiro } from '../models/Enfermeiro.model';
import { EnfermeiroService } from '../services/enfermeiro.service';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tabela-enfermeiros',
  standalone: true,
  imports: [TableModule, MatButtonModule],
  templateUrl: './tabela-enfermeiros.component.html',
  styleUrl: './tabela-enfermeiros.component.css'
})
export class TabelaEnfermeirosComponent {

  constructor(private enfermeiroService: EnfermeiroService){}

  public enfermeiros: Enfermeiro[] = [];

  ngOnInit(): void{
    this.buscarInformacoesEnfermeiros();
  }

  public buscarInformacoesEnfermeiros(): void {
    this.enfermeiroService.listarEnfermeiros().subscribe((dados: Enfermeiro[]) => {
      this.enfermeiros = dados;
      console.log(dados);
    })
  }
}
