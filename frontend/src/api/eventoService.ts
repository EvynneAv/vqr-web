import { api } from '../baseConfig'

export interface Evento{
    id:number,
    nome:string,
    parque:string,
    cidade:string,  
    cover: {
        url:string
    }
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
  

class EventoService {

    async get(page =  1): Promise<EventoCollection> {
      const { data } = await api.get('/eventos', {
        params: {
          populate: ['cover'],
          "pagination[page]": page,
        }
      })
      return { items: data.data, pagination: data.meta.pagination }
    }
  
    // async getById(id: number): Promise<Manga> {
    //   const { data } = await api.get(`/mangas/${id}`, {
    //     params: {
    //       populate: ['cover', 'comments']
    //     }
    //   })
    //   return data.data
    // }
  
  
  }

export const useEventoService = () => new EventoService()
  
