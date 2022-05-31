import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []; //Criamos um novo array de produtos
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private ProductService: ProductService) { } //injetamos o productService nesse componente.

  ngOnInit(): void {
    this.ProductService.read().subscribe(produtos => { //Chamamos a funcao de read, e apos ela completar (subscribe), iremos pegar os produtos que vieram e colocaremos eles dentro do array products criado acima.
      this.products = produtos
      //console.log(produtos)
    })
  }

}
