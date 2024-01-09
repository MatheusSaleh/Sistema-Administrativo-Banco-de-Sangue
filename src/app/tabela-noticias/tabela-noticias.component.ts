import { Component } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';
import { Noticia } from '../models/Noticia.model';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-tabela-noticias',
  standalone: true,
  imports: [TableModule, MatButtonModule, TooltipModule],
  templateUrl: './tabela-noticias.component.html',
  styleUrl: './tabela-noticias.component.css'
})
export class TabelaNoticiasComponent {

  constructor(private noticiaService: NoticiaService){}

  public noticias: Noticia[] = [];

  ngOnInit(): void{
    this.buscarNoticias();
  }

  public buscarNoticias(): void{
    this.noticiaService.listarNoticias().subscribe((dados: Noticia[]) => {
      this.noticias = dados;
      console.log(dados);
    })
  }
}
