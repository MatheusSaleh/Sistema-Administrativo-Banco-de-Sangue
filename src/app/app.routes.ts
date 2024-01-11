import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'doadores',
    loadComponent: () => import(`./tabela-doadores/tabela-doadores.component`)
      .then(c => c.TabelaDoadoresComponent),
    },
  {
    path: 'enfermeiros',
    loadComponent: () => import(`./tabela-enfermeiros/tabela-enfermeiros.component`)
    .then(c => c.TabelaEnfermeirosComponent)
  },
  {
    path: 'doacoes',
    loadComponent: () => import(`./tabela-doacoes/tabela-doacoes.component`)
    .then(c => c.TabelaDoacoesComponent)
  },
  {
    path: 'questoes',
    loadComponent: () => import(`./tabela-questoes/tabela-questoes.component`)
    .then(c => c.TabelaQuestoesComponent)
  },
  {
    path: 'noticias',
    loadComponent: () => import(`./tabela-noticias/tabela-noticias.component`)
    .then(c => c.TabelaNoticiasComponent)
  },
  {
    path: 'verifica-elegibilidade',
    loadComponent: () => import(`./verifica-elegibilidade/verifica-elegibilidade.component`)
    .then(c => c.VerificaElegibilidadeComponent)
  },
  {
  path: 'gerencia-equipamentos-medicos',
  loadComponent: () => import(`./gerencia-equipamentos-medicos/gerencia-equipamentos-medicos.component`)
  .then(c => c.GerenciaEquipamentosMedicosComponent)
  },
  {
    path: 'transfucoes-de-sangue',
    loadComponent: () => import(`./transfucoes-de-sangue/transfucoes-de-sangue.component`)
    .then(c => c.TransfucoesDeSangueComponent)
  },
  {
    path: 'estoque-sangue',
    loadComponent: () => import(`./estoque-de-sangue/estoque-de-sangue.component`)
    .then(c => c.EstoqueDeSangueComponent)
  },
  {
    path: 'campanhas-de-doacao-de-sangue',
    loadComponent: () => import(`./campanhas-de-doacao-de-sangue/campanhas-de-doacao-de-sangue.component`)
    .then(c => c.CampanhasDeDoacaoDeSangueComponent)
  },
  {
    path: 'atualizar-guia-de-doacao-de-sangue',
    loadComponent: () => import(`./atualizar-guia-doacao-de-sangue/atualizar-guia-doacao-de-sangue.component`)
    .then(c => c.AtualizarGuiaDoacaoDeSangueComponent)
  },
  {
    path: 'controle-acesso',
    loadComponent: () =>import(`./controle-acessos/controle-acessos.component`)
    .then(c => c.ControleAcessosComponent)
  },
  {
    path: 'tabela-receptores',
    loadComponent: () => import(`./tabela-receptores/tabela-receptores.component`)
    .then(c => c.TabelaReceptoresComponent)
  },
  {
    path: 'tabela-conquistas-de-usuario',
    loadComponent: () => import(`./tabela-conquistas-de-usuario/tabela-conquistas-de-usuario.component`)
    .then(c => c.TabelaConquistasDeUsuarioComponent)
  },
  {
    path: 'duvidas-de-usuarios',
    loadComponent: () => import(`./duvidas-de-usuarios/duvidas-de-usuarios.component`)
    .then(c => c.DuvidasDeUsuariosComponent)
  },
  {
    path: 'atribui-missoes',
    loadComponent: () => import(`./atribui-missoes/atribui-missoes.component`)
    .then(c => c.AtribuiMissoesComponent)
  },
  {
    path: 'gerenciar-descontos-ofertas',
    loadComponent: () => import(`./gerenciar-descontos-ofertas/gerenciar-descontos-ofertas.component`)
    .then(c => c.GerenciarDescontosOfertasComponent)
  },
  {
    path: 'gerenciar-empresas-parceiras',
    loadComponent: () => import(`./gerenciar-empresas-parceiras/gerenciar-empresas-parceiras.component`)
    .then(c => c.GerenciarEmpresasParceirasComponent)
  },
  {
    path: 'solicitar-doacao-em-massa-para-empresa',
    loadComponent: () => import(`./solicitar-doacao-em-massa-para-empresa/solicitar-doacao-em-massa-para-empresa.component`)
    .then(c => c.SolicitarDoacaoEmMassaParaEmpresaComponent)
  },
  {
    path: 'gerenciar-parcerias-com-influenciadores',
    loadComponent: () => import(`./gerenciar-parcerias-com-influenciadores/gerenciar-parcerias-com-influenciadores.component`)
    .then(c => c.GerenciarParceriasComInfluenciadoresComponent)
  },
  {
    path: 'gerenciar-feedbacks-pos-doacao',
    loadComponent: () => import(`./gerenciar-feedbacks-pos-doacao/gerenciar-feedbacks-pos-doacao.component`)
    .then(c => c.GerenciarFeedbacksPosDoacaoComponent)
  },
  {
    path: 'gerenciar-medicos',
    loadComponent: () => import(`./gerenciar-medicos/gerenciar-medicos.component`)
    .then(c => c.GerenciarMedicosComponent)
  },
  {
    path: 'agendar-doacao-de-sangue',
    loadComponent: () => import(`./agendar-doacao-de-sangue/agendar-doacao-de-sangue.component`)
    .then(c => c.AgendarDoacaoDeSangueComponent)
  },
  {
    path: 'gerenciar-pessoas-precisando-de-doacao',
    loadComponent: () => import(`./gerenciar-pessoas-precisando-de-doacao/gerenciar-pessoas-precisando-de-doacao.component`)
    .then(c => c.GerenciarPessoasPrecisandoDeDoacaoComponent)
  },
  {
    path: 'comunicacao-com-outros-hemocentros',
    loadComponent: () => import(`./comunicao-com-outros-hemocentros/comunicao-com-outros-hemocentros.component`)
    .then(c => c.ComunicaoComOutrosHemocentrosComponent)
  }
];


