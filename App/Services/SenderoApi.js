import apisauce from 'apisauce'

const create = (baseURL = 'https://sib.gob.ar/api/2.0.0') => {

   const api = apisauce.create({
      baseURL,
      Headers,
      TIMEOUT: 10000
   })


   const getId = (id) => api.get(`/sendero/${id}`)
   // const getList = () => api.get('list')
   // const search = (name) => api.get('search/sendero', {q: name})
   // const getId = () => ({
   //    "id": '1',
   //    "nombre":'Lon Andes',
   //    "imagen": 'https://picsum.photos/300/200',
   //    "descripcion": 'Descripcion de un sendero'
   // })

   const getList =() => ([
      {
         "id": 1,
         "nombre":'Lon Andes',
         "imagen": 'https://picsum.photos/300/200',
         "descripcion": 'Descripcion de un sendero'
      },
      {
         "id": 2,
         "nombre":'Pico Alto',
         "imagen": 'https://picsum.photos/300/200',
         "descripcion": 'Descripcion de un sendero'
      },
      {
         "id": 3,
         "nombre":'Camino Verde',
         "imagen": 'https://picsum.photos/300/200',
         "descripcion": 'Descripcion de un sendero'
      },
      {
         "id": 4,
         "nombre":'Tembleque',
         "imagen": 'https://picsum.photos/300/200',
         "descripcion": 'Descripcion de un sendero'
      },
   ])

   return {
      getId,
      getList
   }
}

export default {
   create
 }
 