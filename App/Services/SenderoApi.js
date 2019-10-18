import apisauce from 'apisauce'

const create = (baseURL = 'https://sib.gob.ar/api/2.0.0') => {

   const api = apisauce.create({
      baseURL,
      Headers,
      TIMEOUT: 10000
   })


   const getId = (id) => api.get(`/senderos/${id}`)
   const getList = () => api.get(`/ficha-area-protegida/parque-nacional-los-glaciares/senderos`)

   return {
      getId,
      getList
   }
}

export default {
   create
 }
 