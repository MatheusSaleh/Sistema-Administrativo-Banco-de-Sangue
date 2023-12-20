import { Routes } from '@angular/router';
import { TabelaEnfermeirosComponent } from './tabela-enfermeiros/tabela-enfermeiros.component';
import { TabelaDoadoresComponent } from './tabela-doadores/tabela-doadores.component';
import { TabelaDoacoesComponent } from './tabela-doacoes/tabela-doacoes.component';
import { TabelaQuestoesComponent } from './tabela-questoes/tabela-questoes.component';
import { TabelaNoticiasComponent } from './tabela-noticias/tabela-noticias.component';
import { VerificaElegibilidadeComponent } from './verifica-elegibilidade/verifica-elegibilidade.component';
import { GerenciaEquipamentosMedicosComponent } from './gerencia-equipamentos-medicos/gerencia-equipamentos-medicos.component';
import { TransfucoesDeSangueComponent } from './transfucoes-de-sangue/transfucoes-de-sangue.component';
import { EstoqueDeSangueComponent } from './estoque-de-sangue/estoque-de-sangue.component';
import { CampanhasDeDoacaoDeSangueComponent } from './campanhas-de-doacao-de-sangue/campanhas-de-doacao-de-sangue.component';
import { AtualizarGuiaDoacaoDeSangueComponent } from './atualizar-guia-doacao-de-sangue/atualizar-guia-doacao-de-sangue.component';
import { ControleAcessosComponent } from './controle-acessos/controle-acessos.component';
import { TabelaReceptoresComponent } from './tabela-receptores/tabela-receptores.component';
import { TabelaConquistasDeUsuarioComponent } from './tabela-conquistas-de-usuario/tabela-conquistas-de-usuario.component';
import { DuvidasDeUsuariosComponent } from './duvidas-de-usuarios/duvidas-de-usuarios.component';
import { AtribuiMissoesComponent } from './atribui-missoes/atribui-missoes.component';
import { GerenciarDescontosOfertasComponent } from './gerenciar-descontos-ofertas/gerenciar-descontos-ofertas.component';
import { GerenciarEmpresasParceirasComponent } from './gerenciar-empresas-parceiras/gerenciar-empresas-parceiras.component';
import { SolicitarDoacaoEmMassaParaEmpresaComponent } from './solicitar-doacao-em-massa-para-empresa/solicitar-doacao-em-massa-para-empresa.component';
import { GerenciarParceriasComInfluenciadoresComponent } from './gerenciar-parcerias-com-influenciadores/gerenciar-parcerias-com-influenciadores.component';
import { GerenciarFeedbacksPosDoacaoComponent } from './gerenciar-feedbacks-pos-doacao/gerenciar-feedbacks-pos-doacao.component';
import { GerenciarMedicosComponent } from './gerenciar-medicos/gerenciar-medicos.component';
import { AgendarDoacaoDeSangueComponent } from './agendar-doacao-de-sangue/agendar-doacao-de-sangue.component';
import { GerenciarPessoasPrecisandoDeDoacaoComponent } from './gerenciar-pessoas-precisando-de-doacao/gerenciar-pessoas-precisando-de-doacao.component';
import { ComunicaoComOutrosHemocentrosComponent } from './comunicao-com-outros-hemocentros/comunicao-com-outros-hemocentros.component';

export const routes: Routes = [
  {path: 'doadores', component: TabelaDoadoresComponent},
  {path: 'enfermeiros', component: TabelaEnfermeirosComponent},
  {path: 'doacoes', component: TabelaDoacoesComponent},
  {path: 'questoes', component: TabelaQuestoesComponent},
  {path: 'noticias', component: TabelaNoticiasComponent},
  {path: 'verifica-elegibilidade', component: VerificaElegibilidadeComponent},
  {path: 'gerencia-equipamentos-medicos', component: GerenciaEquipamentosMedicosComponent},
  {path: 'transfucoes-de-sangue', component: TransfucoesDeSangueComponent},
  {path: 'estoque-sangue', component: EstoqueDeSangueComponent},
  {path:  'campanhas-de-doacao-de-sangue', component: CampanhasDeDoacaoDeSangueComponent},
  {path: 'atualizar-guia-de-doacao-de-sangue', component: AtualizarGuiaDoacaoDeSangueComponent},
  {path: 'controle-acesso', component: ControleAcessosComponent},
  {path: 'tabela-receptores', component: TabelaReceptoresComponent},
  {path: 'tabela-conquistas-de-usuario', component: TabelaConquistasDeUsuarioComponent},
  {path: 'duvidas-de-usuarios', component: DuvidasDeUsuariosComponent},
  {path: 'atribui-missoes', component: AtribuiMissoesComponent},
  {path: 'gerenciar-descontos-ofertas', component: GerenciarDescontosOfertasComponent},
  {path: 'gerenciar-empresas-parceiras', component: GerenciarEmpresasParceirasComponent},
  {path: 'solicitar-doacao-em-massa-para-empresa', component: SolicitarDoacaoEmMassaParaEmpresaComponent},
  {path: 'gerenciar-parcerias-com-influenciadores', component: GerenciarParceriasComInfluenciadoresComponent},
  {path: 'gerenciar-feedbacks-pos-doacao', component: GerenciarFeedbacksPosDoacaoComponent},
  {path: 'gerenciar-medicos', component: GerenciarMedicosComponent},
  {path: 'agendar-doacao-de-sangue', component: AgendarDoacaoDeSangueComponent},
  {path: 'gerenciar-pessoas-precisando-de-doacao', component: GerenciarPessoasPrecisandoDeDoacaoComponent},
  {path: 'comunicacao-com-outros-hemocentros', component: ComunicaoComOutrosHemocentrosComponent}
];


