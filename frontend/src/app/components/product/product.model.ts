export interface Product { //Mesmo conceito de interface do Java, todo objeto do tipo dessa interface tera que ter obrigatoriamente todos os atributos mas tambem podem ter atributos opcionais.
    id?: number //Estamos definindo id como atributo opcional (?), pois nem sempre o produto vai ter id (na criacao dele).
    name: string
    price: number
}