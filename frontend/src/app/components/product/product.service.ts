import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model'; //Para usarmos a classe Product, ela deve ser importada tambem do arquivo product.model.ts
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //Essa linha de codigo (root) faz com que o service seja um singleton (uma unica instancia em todo o projeto).
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { } //Novamente estamos usando o conceito de injecao de dependencias aqui.

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product> { //Basicamente o observable sera o que sera retornado da funcao.
    return this.http.post<Product>(this.baseUrl, product).pipe( //Aqui estamos fazendo uma requisicao do tipo post, pois queremos inserir um produto. O primeiro parametro eh a URL que sera feita a requisicao e o segundo parametro sera o proprio produto que foi recebido como parametro no metodo "create".
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]> { //Basicamente o observable sera o que sera retornado da funcao. Nesse caso um array de products
    return this.http.get<Product[]>(this.baseUrl).pipe( //Aqui o http esta fazendo uma requisicao do tipo get para ler os produtos e passamos como parametro a url (api) que esta nosso backend.
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    product = { name: product.name, price: Number(product.price) }
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

}
