import { Routes } from '@angular/router';
import { TabelaEnfermeirosComponent } from './tabela-enfermeiros/tabela-enfermeiros.component';
import { TabelaDoadoresComponent } from './tabela-doadores/tabela-doadores.component';

export const routes: Routes = [
  {path: 'doadores', component: TabelaDoadoresComponent},
  {path: 'enfermeiros', component: TabelaEnfermeirosComponent},
];


