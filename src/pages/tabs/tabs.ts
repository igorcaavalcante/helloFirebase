import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { InformacoesPage } from '../informacoes/informacoes';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = InformacoesPage;
  tab3Root: any = CadastroPage;

  constructor() {

  }
}
