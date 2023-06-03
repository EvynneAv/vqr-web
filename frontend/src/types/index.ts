export interface Evento{
    id:number,
    nome:string,
    parque:string,
    cidade:string,
    local:string,
    data:Date,
    horario:Date,
    valor_do_ingresso:number,
    descricao:string,
    cover: {
        url:string
    }
    qtd_ingressos:number
}

export interface Pagination{
    page:number,
    pageCount:number,
    pageSize:number,
    total:number,
}

export interface EventoCollection {
    items: Evento[],
    pagination: Pagination
  }
  