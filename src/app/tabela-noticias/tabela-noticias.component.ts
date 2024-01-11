import { Component } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';
import { Noticia } from '../models/Noticia.model';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tabela-noticias',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule, ProgressSpinnerModule, NgIf],
  templateUrl: './tabela-noticias.component.html',
  styleUrl: './tabela-noticias.component.css'
})
export class TabelaNoticiasComponent {

  constructor(private noticiaService: NoticiaService){}

  public noticias: Noticia[] = [];

  public carregandoNoticias: boolean = false;

  ngOnInit(): void{
    this.buscarNoticias();
  }

  public buscarNoticias(): void{
    this.carregandoNoticias = true;

    this.noticiaService.listarNoticias().subscribe((dados: Noticia[]) => {
      this.noticias = dados;
      this.carregandoNoticias = false;
    })
  }
}
