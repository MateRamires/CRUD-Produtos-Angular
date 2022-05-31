import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' //Inicialmente foi feito o port do rounter.

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private HeaderService: HeaderService) { //Com o port do router feito, o angular pode injetar o router nesse componente atraves do construtor. (injecao de dependencias - um terceiro fornecer a instancia de um objeto).
    HeaderService.headerData = {
      title: "Cadastro de Produtos",
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate() {
    this.router.navigate(['/products/create']) //Com a injecao pronta, eu posso usar o atributo router do tipo Router para fazer funcoes que apenas uma variavel do tipo router pode fazer, como o uso do metodo navigate.
  }


}
