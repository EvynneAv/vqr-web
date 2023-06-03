import { api } from '../baseConfig'
import{EventoCollection } from '../types/index'


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
  
