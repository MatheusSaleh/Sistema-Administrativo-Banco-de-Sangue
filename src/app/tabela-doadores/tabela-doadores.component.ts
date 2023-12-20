import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-tabela-doadores',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabela-doadores.component.html',
  styleUrl: './tabela-doadores.component.css'
})
export class TabelaDoadoresComponent {

}
