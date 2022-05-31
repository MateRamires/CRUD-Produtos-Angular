import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core'; //Lembrando que para fazer a injecao, deve-se sempre importar a depedencia primeiro.
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null!
  }

  //atributoLegal = "qualquer"

  constructor(private productService: ProductService, private router: Router) { } //Lembrando, aqui esta sendo feito a injecao de dependencias do service.

  ngOnInit(): void {
  }

  /*fazerAlgo(): void {
    console.log("Algo")
  }*/

  createProduct(): void {
    this.product = {name: this.product.name, price: Number(this.product.price)}
    this.productService.create(this.product).subscribe(() => { //subscribe eh acionado quando a resposta for retornada.
      this.productService.showMessage("Produto Criado!")
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
