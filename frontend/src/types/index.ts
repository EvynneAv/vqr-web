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

export interface ApplicationError {
    name: string,
    message: string,
    details?: string[],
}

export interface StrapiResponse<T> {
    data: T,
    meta: {
      pagination: Pagination
    }
}

export interface StrapiError {
    error: {
      status: number,
      name: string,
      message: string,
      details: {
        errors: StrapiErrorDetail[]
      }
    }
}

export interface StrapiErrorDetail {
    path: string[],
    message: string,
    name: string,
}

export interface LoginRequest {
    identifier: string,
    password: string
}

export interface LoginResponse {
    jwt: string,
    user: User
}

export interface User {
    id: number,
    username: string,
    email: string,
    role: {
      type: string
    }
}

export enum Status {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "danger"
 }

  export interface Message {
    id: number,
    content: string
    status: Status
}

  