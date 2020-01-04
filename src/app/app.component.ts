import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'teste';

  numeros: number[] = [1,2,3,4,5];

  pessoas: any = {
    tarefa: 'sergio', responsavel: {
      nome: 'estou no objeto'
    }
  };

  blocos = [
    {nome: 'sergio'},
    {nome: 'jãoo'}
  ];  
  
  
  meuFavorito = true;

  ativo: boolean = true;
  tamanhoFonte: number = 14;

  verN() {

    console.log(this.numeros.length);
    
    if (this.numeros.length > 0) {
      return false;
    }
    else {
      return true;
    }  
  }

  mudarAtivo()  {
    this.ativo = !this.ativo;
  }

  onClick() {

    this.meuFavorito = !this.meuFavorito;
    this.tamanhoFonte = this.tamanhoFonte++;
  }

}

