import apisauce from 'apisauce'

const create = (baseURL = 'https://sib.gob.ar/api/2.0.0') => {

  const api = apisauce.create({
    baseURL,
    Headers,
    TIMEOUT: 10000
  })

  // const getId = (id) => api.get(`/punto-interes/${id}`)
  // const getList = () => api.get(`/ficha-area-protegida/parque-nacional-los-glaciares/punto-interes`)
  // const search = (name) => api.get('/ficha-area-protegida/parque-nacional-los-glaciares/search/punto-interes', {q: name})
  jsonPuntoInteresLists = {
    "type": "FeatureCollection",
    "name": "puntos_interes-pn-tdf",
    "features": [
      //Prueba personal de funcionamiento
      {
        "type": "Feature",
        "properties": {
          "id": 100,
          "Name": "A",
          "State": "oculto",
          "photo": require('../Images/interest_points/245viviendas.jpg'),
          "description": "Fusce et rutrum purus, at tempus sem. Cras auctor ultrices eros. Aenean molestie risus in quam aliquet rutrum. Pellentesque fermentum."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.316743, -54.803225, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 101,
          "Name": "B",
          "State": "oculto",
          "photo": require('../Images/interest_points/245viviendas.jpg'),
          "description": "Fusce sed ligula turpis. In nec augue convallis, sagittis elit vel, iaculis odio. Praesent ac massa libero. Sed condimentum pellentesque."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.316368, -54.803163, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 102,
          "Name": "C",
          "State": "oculto",
          "photo": require('../Images/interest_points/245viviendas.jpg'),
          "description": "Ut auctor tellus id mi dapibus, ac tristique dui porta. Donec mollis mi risus, quis ornare velit dapibus eget. Cras."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.316448, -54.803336, 0.0]
        }
      },
      //UNTDF
      {
        "type": "Feature",
        "properties": {
          "id": 103,
          "Name": "UNTDF A",
          "State": "oculto",
          "photo": require('../Images/interest_points/untdf_entrada.jpg'),
          "description": "Cras porttitor arcu sed justo malesuada tincidunt. Vestibulum hendrerit nulla ac felis vulputate varius. Suspendisse potenti. Praesent diam leo, lacinia."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.328163, -54.825150, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 104,
          "Name": "UNTDF B",
          "State": "oculto",
          "photo": require('../Images/interest_points/untdf_entrada.jpg'),
          "description": "Donec metus lorem, tincidunt et tempor non, imperdiet eget mi. Praesent fermentum libero velit, nec consequat risus pretium nec. Nunc."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.328052, -54.825292, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 105,
          "Name": "UNTDF C",
          "State": "oculto",
          "photo": require('../Images/interest_points/untdf_entrada.jpg'),
          "description": "Maecenas egestas est nec eleifend iaculis. Cras vel augue erat. Fusce at nisi porta, lacinia enim sit amet, egestas purus."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.327959, -54.825185, 0.0]
        }
      },
      //
      //
      //Puntos de interés del parque
      {
        "type": "Feature",
        "properties": {
          "id": 1,
          "Name": "Secc. Fenochio",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Nulla enim sapien, mollis porta consectetur egestas, hendrerit sed erat. Fusce sapien neque, porta non tempus et, aliquam eget libero."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.560278, -54.834743, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 2,
          "Name": "Secc. Lapataia",
          "State": "oculto",
          "photo": require('../Images/interest_points/mirador_lapataia.jpg'),
          "description": "Vivamus at nunc in libero iaculis lobortis. Vivamus pellentesque turpis eget ante scelerisque volutpat. Duis suscipit dapibus mi id congue."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.559558, -54.843858, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 3,
          "Name": "Secc. La Portada",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Vivamus at nunc in libero iaculis lobortis. Vivamus pellentesque turpis eget ante scelerisque volutpat. Duis suscipit dapibus mi id congue."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.447883, -54.834744, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 4,
          "Name": "Intendencia PNTF",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Etiam tincidunt purus et nisi bibendum feugiat. Quisque molestie, lorem at hendrerit ultrices, nibh tortor blandit est, in consequat dui."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.317046, -54.809357, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 5,
          "Name": "Centro de Visitantes Alakush",
          "State": "oculto",
          "photo": require('../Images/interest_points/centro_Alakush.jpg'),
          "description": "Nullam malesuada euismod nulla, at ultricies nisl gravida non. Cras sodales dolor eu tortor eleifend porttitor. Sed a metus eros."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.561879, -54.83745, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 6,
          "Name": "Laguna Negra",
          "State": "oculto",
          "photo": require('../Images/interest_points/laguna_negra.jpg'),
          "description": "Ut tristique gravida metus, blandit sagittis risus sollicitudin eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.589615, -54.840083, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 7,
          "Name": "Cascada Rio Pipo",
          "State": "oculto",
          "photo": require('../Images/interest_points/cascada_rio_pipo.jpg'),
          "description": "Nulla enim sapien, mollis porta consectetur egestas, hendrerit sed erat. Fusce sapien neque, porta non tempus et, aliquam eget libero."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.479667, -54.814656, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 8,
          "Name": "Ensenada Zaratiegui",
          "State": "oculto",
          "photo": require('../Images/interest_points/ensenada.jpg'),
          "description": "Vivamus at nunc in libero iaculis lobortis. Vivamus pellentesque turpis eget ante scelerisque volutpat. Duis suscipit dapibus mi id congue."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.481171, -54.846725, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 9,
          "Name": "Lago Roca - Acigami",
          "State": "oculto",
          "photo": require('../Images/interest_points/lago_roca.jpg'),
          "description": "Vivamus at nunc in libero iaculis lobortis. Vivamus pellentesque turpis eget ante scelerisque volutpat. Duis suscipit dapibus mi id congue."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.574304, -54.824839, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 10,
          "Name": "Bahia Lapataia",
          "State": "oculto",
          "photo": require('../Images/interest_points/bahia_lapataia.jpg'),
          "description": "Vestibulum id neque leo. Nullam aliquet ultricies libero, non pretium leo gravida id. Vestibulum posuere, purus mollis iaculis egestas, velit."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.572188, -54.854695, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 11,
          "Name": "Cartel Fin Ruta 3",
          "State": "oculto",
          "photo": require('../Images/interest_points/fin_ruta3.jpg'),
          "description": "Aenean malesuada, quam id laoreet suscipit, lectus ipsum accumsan lorem, vel tempor libero lacus sed sem. Sed in diam ut nunc maximus."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.576317, -54.855288, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 12,
          "Name": "Laguna del Caminante",
          "State": "oculto",
          "photo": require('../Images/interest_points/laguna_del_caminante.jpg'),
          "description": "Donec elementum, neque eu posuere ullamcorper, quam diam porta mi, sit amet auctor turpis tellus nec eros. Donec eget dignissim nibh. Etiam."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.44308, -54.757888, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 13,
          "Name": "Valle de Andorra",
          "State": "oculto",
          "photo": require('../Images/interest_points/valle_andorra.jpg'),
          "description": "Curabitur congue molestie turpis. Morbi in quam scelerisque, luctus ex in, eleifend ipsum. Pellentesque vulputate malesuada libero id fringilla. Nam pellentesque leo."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.368137, -54.754651, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 14,
          "Name": "P. Ishton",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Sed consectetur ipsum ac nisl euismod, id gravida est cursus. Mauris porttitor augue nibh, vel malesuada turpis ultrices sit amet. Vestibulum viverra."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.459628, -54.859103, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 15,
          "Name": "Isla Estorbo",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Aenean neque justo, dictum vitae justo quis, bibendum cursus sapien. Proin laoreet, neque in cursus viverra, elit arcu tempus nibh, sit amet."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.455791, -54.863467, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 16,
          "Name": "Punta Entrada",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Nulla elementum, diam mollis dignissim tincidunt, mauris velit blandit sem, ut malesuada massa ipsum vitae ligula. Pellentesque posuere non ex placerat auctor."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.501445, -54.867268, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 17,
          "Name": "Isla Salmón",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Nunc velit mi, scelerisque sed elementum quis, fringilla sit amet metus. Quisque et faucibus sem. Donec vehicula sem commodo mauris scelerisque vehicula."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.566214, -54.835021, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 18,
          "Name": "Bahía Cucharita",
          "State": "oculto",
          "photo": require('../Images/interest_points/bahia_cucharita.jpg'),
          "description": "In ac massa euismod, gravida risus eleifend, elementum orci. Mauris congue vehicula augue nec convallis. Aliquam convallis ligula elit, ut iaculis orci."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.457161, -54.856421, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 19,
          "Name": "Cerro Bellavista",
          "State": "oculto",
          "photo": require('../Images/interest_points/cerro_guanaco.jpg'),
          "description": "Sed malesuada gravida velit sed venenatis. Maecenas euismod nec elit in tincidunt. Proin laoreet dui non lorem pulvinar accumsan. Praesent tempor ante."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.520016, -54.849238, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 20,
          "Name": "Confiteria",
          "State": "oculto",
          "photo": require('../Images/interest_points/confiteria.jpg'),
          "description": "Maecenas malesuada massa quis metus auctor mollis. Phasellus facilisis aliquam lorem at lacinia. Integer in orci tincidunt, blandit sapien id, ullamcorper nulla."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.562087, -54.837341, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 21,
          "Name": "Linea regular 6",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Proin a dignissim sapien, vitae vestibulum urna. Integer sollicitudin, leo at consectetur faucibus, tellus turpis luctus massa, nec lacinia velit dolor in."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.563143, -54.830351, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 22,
          "Name": "Linea regular 5",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Proin a dignissim sapien, vitae vestibulum urna. Integer sollicitudin, leo at consectetur faucibus, tellus turpis luctus massa, nec lacinia velit dolor in."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.579377, -54.846146, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 23,
          "Name": "Linea regular 4",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Proin a dignissim sapien, vitae vestibulum urna. Integer sollicitudin, leo at consectetur faucibus, tellus turpis luctus massa, nec lacinia velit dolor in."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.481406, -54.846402, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 24,
          "Name": "Linea regular 3",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Proin a dignissim sapien, vitae vestibulum urna. Integer sollicitudin, leo at consectetur faucibus, tellus turpis luctus massa, nec lacinia velit dolor in."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.471516, -54.836516, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 25,
          "Name": "Linea regular 2",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Proin a dignissim sapien, vitae vestibulum urna. Integer sollicitudin, leo at consectetur faucibus, tellus turpis luctus massa, nec lacinia velit dolor in."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.561791, -54.837964, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 26,
          "Name": "Linea regular 1",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Proin a dignissim sapien, vitae vestibulum urna. Integer sollicitudin, leo at consectetur faucibus, tellus turpis luctus massa, nec lacinia velit dolor in."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.578317, -54.855024, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 27,
          "Name": "Souvenirs 1",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Curabitur orci velit, porttitor in blandit eu, commodo quis enim. Proin finibus sapien nec ligula facilisis, in pharetra magna facilisis. Aliquam dolor."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.561642, -54.83753, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 28,
          "Name": "FAF",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Duis nisi augue, rhoncus quis sodales sed, venenatis nec purus. Mauris mattis purus vitae ex commodo, quis pharetra nisl bibendum."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.471236, -54.835968, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 29,
          "Name": "Muelle Puerto Arias",
          "State": "oculto",
          "photo": require('../Images/interest_points/puerto_arias.jpg'),
          "description": "Donec sit amet fringilla nisl, non laoreet eros. Aliquam dui nunc, aliquet ut aliquet eu, euismod quis nunc. Aenean ac."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.573286, -54.8552, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 30,
          "Name": "Oficina APN",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Vestibulum vel mi orci. Integer commodo ex sed blandit tincidunt. Donec elementum posuere nisi, sit amet ullamcorper velit elementum et."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.561813, -54.837459, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 31,
          "Name": "Oficina de informes la Portada",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Vivamus volutpat est non venenatis finibus. Sed malesuada condimentum dignissim. Pellentesque malesuada nisl ipsum, ut malesuada neque condimentum in. Vivamus ut metus."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.446733, -54.83479, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 32,
          "Name": "Estacionamiento 1",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Praesent lacinia metus bibendum leo aliquam, sed interdum neque euismod. Nunc turpis turpis, gravida nec blandit eget, fringilla maximus lacus. Curabitur id."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.578046, -54.855193, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 33,
          "Name": "Mirador Lapataia",
          "State": "oculto",
          "photo": require('../Images/interest_points/mirador_lapataia.jpg'),
          "description": "Aenean congue tincidunt purus eu pretium. Proin malesuada arcu eget risus dictum feugiat. In ut tortor sit amet quam ultricies dignissim. Sed."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.577845, -54.853005, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 34,
          "Name": "Estacionamiento 2",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent a vehicula ligula. Integer quis dapibus magna. Etiam."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.561645, -54.838432, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 35,
          "Name": "Estacionamiento 3",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Sed dictum enim id arcu euismod blandit. Phasellus quis tellus pretium, varius libero tristique, volutpat nisi. Donec dictum in ante et pellentesque."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.447112, -54.834852, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 36,
          "Name": "Estacionamiento 4",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Pellentesque ut imperdiet lacus. Maecenas in turpis dui. Phasellus laoreet mi eu placerat luctus. Sed ut ultrices ex. Suspendisse potenti. Sed vitae."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.563118, -54.830503, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 37,
          "Name": "Estacionamiento 8",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Curabitur orci velit, porttitor in blandit eu, commodo quis enim. Proin finibus sapien nec ligula facilisis, in pharetra magna facilisis. Aliquam dolor."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.573376, -54.844459, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 38,
          "Name": "Estacionamiento 6",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Nulla ultrices mi convallis, sodales dolor sit amet, egestas mi. Nam tempor semper consequat. Nulla facilisi. Ut quis hendrerit lacus."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.581137, -54.846866, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 39,
          "Name": "Estacionamiento 7",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Nullam congue luctus est, dignissim volutpat ex facilisis et. Integer vitae laoreet magna. Nunc felis ipsum, feugiat vitae felis at."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.590377, -54.85548, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 40,
          "Name": "Portada de accceso",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "In a lacus fringilla, tempor mauris feugiat, volutpat nulla. Mauris nec eleifend risus. Quisque mauris quam, lacinia in dolor non."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.444934, -54.834928, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 41,
          "Name": "Casilla de cobro",
          "State": "oculto",
          "photo": require('../Images/interest_points/peaje_parqueTDF.png'),
          "description": "Fusce auctor consectetur ornare. Praesent quis magna eu nisi sagittis consectetur et sit amet sem. Sed eleifend orci quis risus."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.446727, -54.834966, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 42,
          "Name": "Mirador Isla Redonda",
          "State": "oculto",
          "photo": require('../Images/interest_points/mirador_isla_redonda.jpg'),
          "description": "Quisque pellentesque, nisi et dignissim auctor, felis justo sagittis tortor, et suscipit purus dui ac eros. Fusce finibus efficitur nibh."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.49679, -54.841963, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 43,
          "Name": "Mirador Laguna Verde",
          "State": "oculto",
          "photo": require('../Images/interest_points/mirador_laguna_verde.jpg'),
          "description": "Aenean congue tincidunt purus eu pretium. Proin malesuada arcu eget risus dictum feugiat. In ut tortor sit amet quam ultricies dignissim. Sed."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.574326, -54.844046, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 44,
          "Name": "Mirador Río Pipo",
          "State": "oculto",
          "photo": require('../Images/interest_points/rio_pipo.jpg'),
          "description": "Integer quis fermentum eros. Curabitur quis orci id enim accumsan congue. Quisque id egestas dui. Pellentesque euismod massa id interdum."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.479417, -54.814967, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 45,
          "Name": "Mirador Lago Roca",
          "State": "oculto",
          "photo": require('../Images/interest_points/mirador_lago_roca.jpg'),
          "description": "Vivamus volutpat est non venenatis finibus. Sed malesuada condimentum dignissim. Pellentesque malesuada nisl ipsum, ut malesuada neque condimentum in. Vivamus ut metus."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.563714, -54.830674, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 46,
          "Name": "Mirador Alakush",
          "State": "oculto",
          "photo": require('../Images/interest_points/mirador_alakush.jpg'),
          "description": "Aliquam erat volutpat. Integer non est enim. Quisque purus nulla, ornare sit amet finibus a, bibendum sed risus. Sed eget."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.561768, -54.837512, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 47,
          "Name": "Centro de interpretacion",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Quisque facilisis faucibus massa, non venenatis massa dignissim in. Pellentesque orci erat, pulvinar sit amet euismod ac, ullamcorper quis mauris."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.561674, -54.837555, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 48,
          "Name": "Area Acampe Cauquenes",
          "State": "oculto",
          "photo": require('../Images/interest_points/acampe_cauquenes.jpg'),
          "description": "Donec placerat dictum metus, eu tristique augue venenatis ullamcorper. Curabitur eget tristique nulla, in varius diam. Donec auctor, justo hendrerit viverra eleifend."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.578253, -54.846333, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 49,
          "Name": "Area Acampe Laguna Verde",
          "State": "oculto",
          "photo": require('../Images/interest_points/acampe_laguna_verde.jpg'),
          "description": "Vestibulum non ex augue. Duis vel lacus vitae diam cursus maximus. Nunc sollicitudin tellus ultricies enim dapibus, eget sollicitudin libero."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.57889, -54.845039, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 50,
          "Name": "Area de acampe Ensenada",
          "State": "oculto",
          "photo": require('../Images/interest_points/ensenada.jpg'),
          "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent a vehicula ligula. Integer quis dapibus magna. Etiam."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.483271, -54.843872, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 51,
          "Name": "Area de acampe Rio pipo",
          "State": "oculto",
          "photo": require('../Images/interest_points/acampe_rio_pipo.jpg'),
          "description": "Curabitur orci velit, porttitor in blandit eu, commodo quis enim. Proin finibus sapien nec ligula facilisis, in pharetra magna facilisis. Aliquam dolor."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.469339, -54.820235, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 52,
          "Name": "Sanitarios",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.561997, -54.83742, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 53,
          "Name": "Linea regular 7",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Vestibulum eu ornare enim, at eleifend diam. Nam efficitur tortor tortor. Morbi in erat vitae tellus placerat venenatis non nec."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.447455, -54.834986, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 54,
          "Name": "Gendarmería Nacional",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Sed sit amet mi facilisis, feugiat nisi in, posuere leo. Ut tempus semper velit nec vestibulum. Duis a nulla iaculis, vehicula metus."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.563944, -54.844333, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 55,
          "Name": "Estacionamiento 5",
          "State": "oculto",
          "photo": require('../Images/interest_points/mapa_dibujo.jpg'),
          "description": "Vestibulum interdum turpis eu fringilla condimentum. Phasellus quis commodo orci. Nullam vitae sapien et mauris suscipit faucibus vitae in augue."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.480422, -54.846457, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 56,
          "Name": "Isla Redonda",
          "State": "oculto",
          "photo": require('../Images/interest_points/isla_redonda.jpg'),
          "description": "Pellentesque ut imperdiet lacus. Maecenas in turpis dui. Phasellus laoreet mi eu placerat luctus. Sed ut ultrices ex. Suspendisse potenti. Sed vitae."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.482893, -54.863804, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 57,
          "Name": "Área de Acampe Laguna del Caminante",
          "State": "oculto",
          "photo": require('../Images/interest_points/acampe_laguna_del_caminante.jpg'),
          "description": "Vivamus volutpat est non venenatis finibus. Sed malesuada condimentum dignissim. Pellentesque malesuada nisl ipsum, ut malesuada neque condimentum in. Vivamus ut metus."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.445306, -54.758694, 0.0]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": 58,
          "Name": "Cerro Guanaco",
          "State": "oculto",
          "photo": require('../Images/interest_points/cerro_guanaco.jpg'),
          "description": "Curabitur orci velit, porttitor in blandit eu, commodo quis enim. Proin finibus sapien nec ligula facilisis, in pharetra magna facilisis. Aliquam dolor."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-68.510529, -54.817364, 0.0]
        }
      },
    ]
  }

  jsonPuntoInteres = {
    "type": "Feature",
    "properties": {
      "Name": "Laguna Negra",
      "description": "descripción: <br>TIPO: TURBAL<br>NOMBRE: LAGUNA NEGRA<br>ROTULO: Laguna Negra<br>LATITUD: 54° 50' 24.29\" S<br>LONGITUD: 68° 35' 22.61\" W<br>ALTITUD: 23<br>AREA_PROTE: Parque Nacional Tierra del Fuego<br>name: Laguna Negra",
      "timestamp": null,
      "begin": null,
      "end": null,
      "altitudeMode": null,
      "tessellate": -1,
      "extrude": 0,
      "visibility": -1,
      "drawOrder": null,
      "icon": null,
      "descripci__n": "",
      "TIPO": "TURBAL",
      "NOMBRE": "LAGUNA NEGRA",
      "ROTULO": "Laguna Negra",
      "LATITUD": "54° 50' 24.29\" S",
      "LONGITUD": "68° 35' 22.61\" W",
      "ALTITUD": "23",
      "AREA_PROTE": "Parque Nacional Tierra del Fuego"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-68.589615, -54.840083, 0.0]
    }
  }

  //Produccion
  const getId = (id) => Promise.resolve(jsonPuntoInteres)
  const getList = () => Promise.resolve(jsonPuntoInteresLists)

  //Demo
  const loadAll = () => Promise.resolve(jsonPuntoInteresLists)

  return {
    getId,
    getList,
    loadAll
  }
}

export default {
  create
}
