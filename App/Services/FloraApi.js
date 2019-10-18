import apisauce from 'apisauce'

const create = (baseURL = 'https://sib.gob.ar/api/2.0.0/flora') => {

   const api = apisauce.create({
      baseURL,
      Headers,
      TIMEOUT: 10000
   })


   const getId = (idSendero) => api.get(idSendero)
   const getList = () => api.get('list')

   return {
      getId,
      getList
   }
}

export default {
   create
}
