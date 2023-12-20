import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ViaCepService } from '../via-cep.service';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, HttpClientModule, MatListModule, RouterModule, MatToolbarModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {

  showFiller = false;

  rotas: string[] = ['doadores', 'enfermeiros'];

  constructor(private viaCepService: ViaCepService){


  }

  ngOnInit(): void {
      this.chamarRequisicaoCep();
  }

  chamarRequisicaoCep(){
    this.viaCepService.acharEnderecoPeloCep().subscribe((cep: any) => {
      console.log(cep);
    }, (
      error
    ) => {
      console.error("Deu merda")
    })
  }
}
