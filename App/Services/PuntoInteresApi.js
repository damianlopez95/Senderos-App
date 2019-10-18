import apisauce from 'apisauce'

const create = (baseURL = 'https://sib.gob.ar/api/2.0.0/puntos-interes') => {

   const api = apisauce.create({
      baseURL,
      Headers,
      TIMEOUT: 10000
   })

   const getId = (id) => api.get(id)
   const getList = () => api.get('list')
   const search = (name) => api.get('search/sendero', {q: name})

   return {
      getId,
      getList,
      search
   }
}

export default {
create
}