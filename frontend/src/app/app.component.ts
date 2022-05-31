import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' //o templateUrl aponta para o componente que ira ser a nossa tela do app. (Nesse caso o arquivo app.component.html)
})
export class AppComponent {
  //nome = 'Maria'; //Essa classe seria uma classe de variaveis, entao eu posso digitar uma variavel com nome e valor e pegar o valor dessa variavel la na minha pagina principal html. Basta envolver o nome da variavel com 2 chaves (ex: {{ nome }})
}
