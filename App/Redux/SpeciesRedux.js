import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

//Se pueden utilizar los nros de cada dict como id (además de que cada especie tenga un id declarado).
//id coincide con nombre científico y puede usarse como tal en la screen de especies.

//Wildlife: fauna
const wildlife_SPA = {
  1: {"id": "Merganetta armata", "name": "Pato de los Torrentes", "genre": "Merganetta", "specie": "Armata", "description": "El pato de los torrentes o pato torrentero​ es una especie de ave anseriforme de la familia Anatidae que vive en la cordillera de los Andes. Habita ríos fríos y cristalinos de corrientes rápidas en las montañas de América del Sur. Su distribución geográfica va desde Venezuela hasta Tierra del Fuego, Argentina. ", "photo": require("../Images/species/patos_torrentes.jpg")},
  2: {"id": "Vultur gryphus", "name": "Cóndor Andino", "genre": "Vultur", "specie": "Gryphus", "description": "El cóndor andino, cóndor de los Andes o simplemente cóndor ​ es una specie de ave de la familia Cathartidae que habita en América del Sur. El orden al que pertenece su familia se encuentra en disputa.", "photo": require("../Images/species/Condor.jpg")},
  3: {"id": "Tachyeres pteneres", "name": "Quetro Austral", "genre": "Tachyeres", "specie": "Pteneres", "description": "El pato vapor austral es un ave anseriforme de la familia de las anátidas natural del extremo sur de América del Sur.", "photo": require("../Images/species/Tachyeres_pteneres.jpg")},
  4: {"id": "Phalcoboenus australis", "name": "Matamico Grande", "genre": "Phalcoboenus", "specie": "Australis", "description": "El caracara austral​ es una specie de ave falconiforme de la familia Falconidae, cuya distribución se limita a los archipiélagos situados en el extremo austral de América del Sur. Es principalmente un carroñero. No se conocen subspecies.​", "photo": require("../Images/species/carancho_austral.jpg")},
  5: {"id": "Lama guanicoe", "name": "Guanaco", "genre": "Lama", "specie": "Guanicoe", "description": "El guanaco es una specie de mamífero artiodáctilo de la familia Camelidae propia de América del Sur. Es un animal salvaje, en oposición a la llama que es doméstica. Es de huesos finos, con una altura aproximada de 1,60 metros y cerca de 91 kilogramos de peso.​ Los guanacos jóvenes son llamados chulengos.", "photo": require("../Images/species/Lama-guanicoe.jpeg")},
  6: {"id": "Galaxias maculatus", "name": "Puyen", "genre": "Galaxias", "specie": "Maculatus", "description": "El puye​ o puyén chico es una specie de pez teleósteo de la familia Galaxiidae.", "photo": require("../Images/species/Galaxias_maculatus.jpg")},
  7: {"id": "Lycalopex culpaeus", "name": "Zorro Colorado Fueguino", "genre": "Lycalopex", "specie": "Culpaeus", "description": "El perro yagán, también llamado perro fueguino, era un cánido de origen no determinado​​ y medianas dimensiones que vivía entre los indígenas yaganes y selknam del archipiélago de Tierra del Fuego.", "photo": require("../Images/species/Lycalopex_culpaeus_JM.jpg")},
  8: {"id": "Phalcoboenus albogularis", "name": "Matamico Blanco", "genre": "Phalcoboenus", "specie": "Albogularis", "description": "El caracara araucano​ es una especie de ave falconiforme de la familia Falconidae que habita el bosque andino patagónico de Chile y Argentina. No se conocen subespecies.", "photo": require("../Images/species/Phalcoboenus_albogularis.jpg")},
  9: {"id": "Chloephaga hybrida", "name": "Caranca", "genre": "Chloephaga", "specie": "Hybrida", "description": "La caranca, también conocida como cauquén marino o cauquén caranca, ​ es una especie de ave anseriforme de la familia Anatidae natural del extremo sur de Sudamérica. ", "photo": require("../Images/species/Chloephaga_hybrida.jpg")},
  10: {"id": "Spheniscus magellanicus", "name": "Pingüino Patagónico", "genre": "Spheniscus", "specie": "Magellanicus", "description": "El pingüino patagónico, denominado también pingüino de Magallanes, es una especie de ave de la familia de los pingüinos (Spheniscidae), que nidifica en las islas Malvinas y en las costas e islas de la patagonia de la Argentina y Chile, migrando hacia el norte en el invierno.", "photo": require("../Images/species/Spheniscus_magellanicus.jpg")},
  11: {"id": "Speculanas specularis", "name": "Pato de anteojos", "genre": "Speculanas", "specie": "Specularis", "description": "El pato de anteojos, 'pato anteojillo' o pato alas bronceadas es una especie de ave anseriforme de la familia Anatidae propia de América del Sur. Su distribución geográfica abarca Chile y Argentina, migrando al centro para invernar.", "photo": require("../Images/species/Speculanas_specularis.jpg")},
  12: {"id": "Pygarrhichas albogularis", "name": "Picolezna Patagónico", "genre": "Pygarrhichas", "specie": "Albogularis", "description": "El picolezna comesebo, ​, también denominado picolezna patagónico o comesebo grande, ​ es una especie de ave paseriforme de la familia Furnariidae, es el único miembro del género monotípico Pygarrhichas. Es nativo del sudoeste de Sudamérica.", "photo": require("../Images/species/Pygarrhichas_albogularis.jpg")},
  13: {"id": "Phalacrocorax magellanicus", "name": "Cormorán Cuello Negro", "genre": "Phalacrocorax", "specie": "Magellanicus", "description": "El cormorán cuello negro o cormorán de las rocas ​, también denominado cormorán magallánico​ es una especie de ave suliforme perteneciente a la familia Phalacrocoracidae. Habita las costas de la Patagonia en América del Sur.", "photo": require("../Images/species/Phalacrocorax_magellanicus.jpg")},
  14: {"id": "Macronectes giganteus", "name": "Petrel Gigante Común", "genre": "Macronectes", "specie": "Giganteus", "description": "El abanto marino antártico, también conocido como petrel gigante antártico o petrel gigante común, ​ es un ave de la familia Procellariidae que habita una distribución natural bien extensa, comprendiendo todos los mares del Hemisferio Sur, desde las costas de la Antártida hasta el trópico de Capricornio.", "photo": require("../Images/species/Macronectes_giganteus.jpg")},
  15: {"id": "Chloephaga poliocephala", "name": "Cauquén Real", "genre": "Chloephaga", "specie": "Poliocephala", "description": "El cauquén cabeza gris, también conocido como cauquén cabecigrís, canquén, caiquén, cauquén, cauquén real, gansillo y avutarda, es una especie de ave anseriforme de la familia Anatidae propia del sur de América del Sur.", "photo": require("../Images/species/Chloephaga_poliocephala.jpg")},
  16: {"id": "Chloephaga picta", "name": "Cauquén Común", "genre": "Chloephaga", "specie": "Picta", "description": "El cauquén común, caiquén, avutarda magallánica, cauquén magallánico o ganso de Magallanes, es una especie de ave anseriforme de la familia Anatidae natural de América del Sur.", "photo": require("../Images/species/Chloephaga_picta.jpg")},
  17: {"id": "Campephilus magellanicus", "name": "Carpintero Negro", "genre": "Campephilus", "specie": "Magellanicus", "description": "El carpintero negro, picamaderos de Magallanes, carpintero magellánico o carpintero gigante es una especie de ave´piciforme de la familia de los pájaros carpinteros. Habita los bosques andino-patagónicos de Chile y Argentina. Esta especie está emparentada con Campephilus imperialis del hemisferio norte.", "photo": require("../Images/species/Campephilus_magellanicus.jpg")},
  18: {"id": "Attagis malouinus", "name": "Agachona Patagónica", "genre": "Attagis", "specie": "Malouinus", "description": "La Agachona Patagónica o perdicita cordillerana austral es una especie de ave caradriforme de la familia Thinocoridae que vive en el extremo sur de Sudamérica.", "photo": require("../Images/species/Attagis_malouinus.jpg")},
  19: {"id": "Lontra provocax", "name": "Lobito Patagónico", "genre": "Lontra", "specie": "Provocax", "description": "El lobito patagónico, huillín, gato de río, gato huillin o nutria de agua dulce es una especie de nutria que habita Chile y Argentina. Aunque la llaman de 'agua dulce', se halla en ambos ambientes: marino y fluvial.", "photo": require("../Images/species/Lontra_provocax.jpg")},
  20: {"id": "Phalacrocorax atriceps", "name": "Cormorán Imperial​ ", "genre": "Phalacrocorax", "specie": "Atriceps", "description": "El cormorán imperial​ ​ es una especie de ave suliforme de la familia Phalacrocoracidae​​ que puebla las costas antárticas, y el extremo sur de la Patagonia.", "photo": require("../Images/species/Phalacrocorax_atriceps.jpg")},
}

const wildlife_ENG = {
  1: {"id": "Merganetta armata", "name": "Pato de los Torrentes", "genre": "Merganetta", "specie": "Armata", "description": "El pato de los torrentes o pato torrentero​ es una especie de ave anseriforme de la familia Anatidae que vive en la cordillera de los Andes. Habita ríos fríos y cristalinos de corrientes rápidas en las montañas de América del Sur. Su distribución geográfica va desde Venezuela hasta Tierra del Fuego, Argentina. ", "photo": require("../Images/species/patos_torrentes.jpg")},
  2: {"id": "Vultur gryphus", "name": "Cóndor Andino", "genre": "Vultur", "specie": "Gryphus", "description": "El cóndor andino, cóndor de los Andes o simplemente cóndor ​ es una specie de ave de la familia Cathartidae que habita en América del Sur. El orden al que pertenece su familia se encuentra en disputa.", "photo": require("../Images/species/Condor.jpg")},
  3: {"id": "Tachyeres pteneres", "name": "Quetro Austral", "genre": "Tachyeres", "specie": "Pteneres", "description": "El pato vapor austral es un ave anseriforme de la familia de las anátidas natural del extremo sur de América del Sur.", "photo": require("../Images/species/Tachyeres_pteneres.jpg")},
  4: {"id": "Phalcoboenus australis", "name": "Matamico Grande", "genre": "Phalcoboenus", "specie": "Australis", "description": "El caracara austral​ es una specie de ave falconiforme de la familia Falconidae, cuya distribución se limita a los archipiélagos situados en el extremo austral de América del Sur. Es principalmente un carroñero. No se conocen subspecies.​", "photo": require("../Images/species/carancho_austral.jpg")},
  5: {"id": "Lama guanicoe", "name": "Guanaco", "genre": "Lama", "specie": "Guanicoe", "description": "El guanaco es una specie de mamífero artiodáctilo de la familia Camelidae propia de América del Sur. Es un animal salvaje, en oposición a la llama que es doméstica. Es de huesos finos, con una altura aproximada de 1,60 metros y cerca de 91 kilogramos de peso.​ Los guanacos jóvenes son llamados chulengos.", "photo": require("../Images/species/Lama-guanicoe.jpeg")},
  6: {"id": "Galaxias maculatus", "name": "Puyen", "genre": "Galaxias", "specie": "Maculatus", "description": "El puye​ o puyén chico es una specie de pez teleósteo de la familia Galaxiidae.", "photo": require("../Images/species/Galaxias_maculatus.jpg")},
  7: {"id": "Lycalopex culpaeus", "name": "Zorro Colorado Fueguino", "genre": "Lycalopex", "specie": "Culpaeus", "description": "El perro yagán, también llamado perro fueguino, era un cánido de origen no determinado​​ y medianas dimensiones que vivía entre los indígenas yaganes y selknam del archipiélago de Tierra del Fuego.", "photo": require("../Images/species/Lycalopex_culpaeus_JM.jpg")},
  8: {"id": "Phalcoboenus albogularis", "name": "Matamico Blanco", "genre": "Phalcoboenus", "specie": "Albogularis", "description": "El caracara araucano​ es una especie de ave falconiforme de la familia Falconidae que habita el bosque andino patagónico de Chile y Argentina. No se conocen subespecies.", "photo": require("../Images/species/Phalcoboenus_albogularis.jpg")},
  9: {"id": "Chloephaga hybrida", "name": "Caranca", "genre": "Chloephaga", "specie": "Hybrida", "description": "La caranca, también conocida como cauquén marino o cauquén caranca, ​ es una especie de ave anseriforme de la familia Anatidae natural del extremo sur de Sudamérica. ", "photo": require("../Images/species/Chloephaga_hybrida.jpg")},
  10: {"id": "Spheniscus magellanicus", "name": "Pingüino Patagónico", "genre": "Spheniscus", "specie": "Magellanicus", "description": "El pingüino patagónico, denominado también pingüino de Magallanes, es una especie de ave de la familia de los pingüinos (Spheniscidae), que nidifica en las islas Malvinas y en las costas e islas de la patagonia de la Argentina y Chile, migrando hacia el norte en el invierno.", "photo": require("../Images/species/Spheniscus_magellanicus.jpg")},
  11: {"id": "Speculanas specularis", "name": "Pato de anteojos", "genre": "Speculanas", "specie": "Specularis", "description": "El pato de anteojos, 'pato anteojillo' o pato alas bronceadas es una especie de ave anseriforme de la familia Anatidae propia de América del Sur. Su distribución geográfica abarca Chile y Argentina, migrando al centro para invernar.", "photo": require("../Images/species/Speculanas_specularis.jpg")},
  12: {"id": "Pygarrhichas albogularis", "name": "Picolezna Patagónico", "genre": "Pygarrhichas", "specie": "Albogularis", "description": "El picolezna comesebo, ​, también denominado picolezna patagónico o comesebo grande, ​ es una especie de ave paseriforme de la familia Furnariidae, es el único miembro del género monotípico Pygarrhichas. Es nativo del sudoeste de Sudamérica.", "photo": require("../Images/species/Pygarrhichas_albogularis.jpg")},
  13: {"id": "Phalacrocorax magellanicus", "name": "Cormorán Cuello Negro", "genre": "Phalacrocorax", "specie": "Magellanicus", "description": "El cormorán cuello negro o cormorán de las rocas ​, también denominado cormorán magallánico​ es una especie de ave suliforme perteneciente a la familia Phalacrocoracidae. Habita las costas de la Patagonia en América del Sur.", "photo": require("../Images/species/Phalacrocorax_magellanicus.jpg")},
  14: {"id": "Macronectes giganteus", "name": "Petrel Gigante Común", "genre": "Macronectes", "specie": "Giganteus", "description": "El abanto marino antártico, también conocido como petrel gigante antártico o petrel gigante común, ​ es un ave de la familia Procellariidae que habita una distribución natural bien extensa, comprendiendo todos los mares del Hemisferio Sur, desde las costas de la Antártida hasta el trópico de Capricornio.", "photo": require("../Images/species/Macronectes_giganteus.jpg")},
  15: {"id": "Chloephaga poliocephala", "name": "Cauquén Real", "genre": "Chloephaga", "specie": "Poliocephala", "description": "El cauquén cabeza gris, también conocido como cauquén cabecigrís, canquén, caiquén, cauquén, cauquén real, gansillo y avutarda, es una especie de ave anseriforme de la familia Anatidae propia del sur de América del Sur.", "photo": require("../Images/species/Chloephaga_poliocephala.jpg")},
  16: {"id": "Chloephaga picta", "name": "Cauquén Común", "genre": "Chloephaga", "specie": "Picta", "description": "El cauquén común, caiquén, avutarda magallánica, cauquén magallánico o ganso de Magallanes, es una especie de ave anseriforme de la familia Anatidae natural de América del Sur.", "photo": require("../Images/species/Chloephaga_picta.jpg")},
  17: {"id": "Campephilus magellanicus", "name": "Carpintero Negro", "genre": "Campephilus", "specie": "Magellanicus", "description": "El carpintero negro, picamaderos de Magallanes, carpintero magellánico o carpintero gigante es una especie de ave´piciforme de la familia de los pájaros carpinteros. Habita los bosques andino-patagónicos de Chile y Argentina. Esta especie está emparentada con Campephilus imperialis del hemisferio norte.", "photo": require("../Images/species/Campephilus_magellanicus.jpg")},
  18: {"id": "Attagis malouinus", "name": "Agachona Patagónica", "genre": "Attagis", "specie": "Malouinus", "description": "La Agachona Patagónica o perdicita cordillerana austral es una especie de ave caradriforme de la familia Thinocoridae que vive en el extremo sur de Sudamérica.", "photo": require("../Images/species/Attagis_malouinus.jpg")},
  19: {"id": "Lontra provocax", "name": "Lobito Patagónico", "genre": "Lontra", "specie": "Provocax", "description": "El lobito patagónico, huillín, gato de río, gato huillin o nutria de agua dulce es una especie de nutria que habita Chile y Argentina. Aunque la llaman de 'agua dulce', se halla en ambos ambientes: marino y fluvial.", "photo": require("../Images/species/Lontra_provocax.jpg")},
  20: {"id": "Phalacrocorax atriceps", "name": "Cormorán Imperial​ ", "genre": "Phalacrocorax", "specie": "Atriceps", "description": "El cormorán imperial​ ​ es una especie de ave suliforme de la familia Phalacrocoracidae​​ que puebla las costas antárticas, y el extremo sur de la Patagonia.", "photo": require("../Images/species/Phalacrocorax_atriceps.jpg")},
}

const flora_SPA = {
  1: {"id": "Luzuriaga marginata", "name": "Enargea", "genre": "Luzuriaga", "specie": "Marginata", "description": "Luzuriaga marginata es una specie fanerógama perteneciente a la familia de las alstroemeriáceas. Se trata de un arbusto rastrero endémico de la patagonia.", "photo": require("../Images/species/Luzuriaga_marginata.jpg")},
  2: {"id": "Berberis microphylla", "name": "Calafate", "genre": "Berberis", "specie": "Microphylla", "description": "El calafate es un arbusto espinoso siempreverde endémico de la Patagonia argentina y chilena. Es una especie botánica de arbusto perenne, de la familia de las Berberidaceae y tiene uso como planta ornamental.", "photo": require("../Images/species/Berberis_microphylla.jpg")},
  3: {"id": "Acaena magellanica", "name": "Acaena magellanica", "genre": "Acaena", "specie": "Magellanica", "description": "Acaena magellanica es una especie de planta de flores natural del extremo sur de América del Sur y muchas islas subantárticas, como las islas Georgias del Sur, las islas Malvinas, las islas Crozet, entre otros.", "photo": require("../Images/species/Acaena_magellanica.jpg")},
  4: {"id": "Acaena ovalifolia", "name": "Acaena ovalifolia", "genre": "Acaena", "specie": "Ovalifolia", "description": "Se trata de una hierba perenne rizomatosa, con follaje ralo y tallos tendidos en el suelo en forma horizontal hacia los extremos y también erectos de hasta 15 cm.", "photo": require("../Images/species/Acaena_ovalifolia.jpg")},
  5: {"id": "Armeria maritima", "name": "Siempreviva", "genre": "Armeria", "specie": "Maritima", "description": "Hierba perenne, rizomatosa, con hojas cespitosas, en rosetas, crece aislada o formando manchones de céspedes o montículos. Es nativa de Eurasia, crece asilvestrada en suelos desnudos, rocosos, en la zona cordillerana.", "photo": require("../Images/species/Armeria_maritima.jpg")},
  6: {"id": "Berberis empetrifolia", "name": "Calafate Enano", "genre": "Berberis", "specie": "empetrifolia", "description": "Berberis empetrifolia es una especie perteneciente a la familia de las berberidáceas. Es originaria de Argentina y Chile.​", "photo": require("../Images/species/Berberis_empetrifolia.jpg")},
  7: {"id": "Cardamine amara", "name": "Berro Amargo Grande", "genre": "Cardamine", "specie": "Amara", "description": "Cardamine amara, conocida como berro amargo grande, es una especie de planta con flores en la familia Brassicaceae. Es una planta perenne con tallos verticales, en su mayoría no ramificados, de hasta 70 cm de altura, y hojas formadas por entre tres y 13 folíolos.", "photo": require("../Images/species/Cardamine_amara.jpg")},
  8: {"id": "Chiliotrichum rosmarinifolium", "name": "Mata Negra", "genre": "Chiliotrichum", "specie": "Rosmarinifolium", "description": "Frecuente en bordes de arroyos y mallines de altura, y en el límite con el bosque, en terrenos rocosos y abiertos. Cordillera de los Andes desde el centro de Chile y Argentina hasta Tierra del Fuego.", "photo": require("../Images/species/Chiliotrichum_rosmarinifolium.jpg")},
  9: {"id": "Embothrium coccineum", "name": "Ciruelillo-Notro", "genre": "Embothrium", "specie": "coccineum", "description": "Embothrium coccineum, es un pequeño árbol perennifolio de la familia Proteaceae. Crece en los bosques templados de Chile y de Argentina.", "photo": require("../Images/species/Embothrium_coccineum.jpg")},
  10: {"id": "Luzuriaga radicans", "name": "Azahar de Monte", "genre": "Luzuriaga", "specie": "Radicans", "description": "Luzuriaga radicans es una especie fanerógama perteneciente a la familia de las alstroemeriáceas. El epíteto específico «radicans» hace referencia a las raíces trepadoras características de esta especie.", "photo": require("../Images/species/Luzuriaga_radicans.jpg")},
  11: {"id": "Maytenus boaria", "name": "Maitén", "genre": "Maytenus", "specie": "Boaria", "description": "Maitén, también conocida como maitén grande, horco-molle (en Córdoba), sauce patagónico, o naranjita. Crece preferentemente en zonas de transición, semiáridas, o cerca de ríos o esteros, en suelos no muy húmedos", "photo": require("../Images/species/Maytenus_boaria.jpg")},
  12: {"id": "Nothofagus antarctica", "name": "Ñire", "genre": "Nothofagus", "specie": "Antarctica", "description": "Nothofagus antarctica —comúnmente llamado ñire, ​ ñirre o haya antártica— es un árbol caducifolio nativo del bosque andino patagónico desde la latitud 33° S hasta Tierra del Fuego. En Argentina, desde Neuquén hasta Tierra del Fuego y en Chile se distribuye entre las regiones de O Higgins y de Magallanes.", "photo": require("../Images/species/Nothofagus_antarctica.jpg")},
  13: {"id": "Nothofagus pumilio", "name": "Lenga", "genre": "Nothofagus", "specie": "pumilio", "description": "La lenga, roble de Tierra del Fuego, haya austral o roble blanco, es un árbol de la familia de las Nothofagaceae. Es una especie representativa del bosque andino patagónico del sur de Argentina y de Chile.", "photo": require("../Images/species/Nothofagus_pumilio.jpg")},
  14: {"id": "Nothofagus betuloides", "name": "Coihüe de Magallanes", "genre": "Nothofagus", "specie": "Betuloides", "description": "Nothofagus betuloides, guindo, coihue blanco o coigüe de Magallanes, es una especie de árbol perteneciente a la familia Nothofagaceae. Es originario de Sudamérica.", "photo": require("../Images/species/Nothofagus_betuloides.jpg")},
  15: {"id": "Drimys winteri", "name": "Canelo de Magallanes", "genre": "Drimys", "specie": "Winteri", "description": "El canelo de Magallanes​ es un árbol siempreverde que habita en gran parte del territorio de Argentina y Chile. Es uno de los árboles sagrados del pueblo mapuche y en su idioma se llama foye o foyke.​", "photo": require("../Images/species/Drimys_winteri.jpg")},
  16: {"id": "Gleichenia quadripartita", "name": "Helecho - Yerba Loza", "genre": "Gleichenia", "specie": "Quadripartita", "description": "Gleichenia quadripartita conocida localmente como yerba loza, palmita, pata de cucho y bi-iúl, es un helecho nativo de Chile con una distribución natural que va desde la latitud de Concepción en el norte hasta la región de Magallanes en el sur, incluidas las partes adyacentes de Argentina.", "photo": require("../Images/species/Gleichenia_quadripartita.jpg")},
  17: {"id": "Gavilea lutea", "name": "Orquidea", "genre": "Gavilea", "specie": "Lutea", "description": "Gavilea lutea es una especie de orquídea de hábito terrestre originaria de Chile y Argentina.​", "photo": require("../Images/species/Gavilea_lutea.jpg")},
  18: {"id": "Blechnum penna-marina", "name": "Punque Pequeño", "genre": "Blechnum", "specie": "penna-marina", "description": "Es originaria de la Región de la Araucanía hacia el sur y desde la costa hasta la línea arbolada de los bosques Magallánicos en Chile y áreas adyacentes de Argentina. También se encuentra en Australia y algunas islas del Pacífico.", "photo": require("../Images/species/Blechnum_penna-marina.jpg")},
  19: {"id": "Chloraea magellanica", "name": "Orquidea", "genre": "Chloraea", "specie": "Magellanica", "description": "Chloraea magellanica es una especie de orquídea de hábito terrestre originaria de Sudamérica.", "photo": require("../Images/species/Chloraea_magellanica.jpg")},
  20: {"id": "Viola reichei", "name": "Violeta amarilla", "genre": "Viola", "specie": "Reichei", "description": "Es una bella planta herbácea de unos 10 cm de altura, perenne, provista de un largo y delgado rizoma. Presenta hojas alternas largamente pecioladas, de forma orbicular a reniforme, con borde ondulado, de casi 2 cm de largo, con nervadura incisa.", "photo": require("../Images/species/Viola_reichei.jpg")},
}

const flora_ENG = {
  1: {"id": "Luzuriaga marginata", "name": "Enargea", "genre": "Luzuriaga", "specie": "Marginata", "description": "Luzuriaga marginata es una specie fanerógama perteneciente a la familia de las alstroemeriáceas. Se trata de un arbusto rastrero endémico de la patagonia.", "photo": require("../Images/species/Luzuriaga_marginata.jpg")},
  2: {"id": "Berberis microphylla", "name": "Calafate", "genre": "Berberis", "specie": "Microphylla", "description": "El calafate es un arbusto espinoso siempreverde endémico de la Patagonia argentina y chilena. Es una especie botánica de arbusto perenne, de la familia de las Berberidaceae y tiene uso como planta ornamental.", "photo": require("../Images/species/Berberis_microphylla.jpg")},
  3: {"id": "Acaena magellanica", "name": "Acaena magellanica", "genre": "Acaena", "specie": "Magellanica", "description": "Acaena magellanica es una especie de planta de flores natural del extremo sur de América del Sur y muchas islas subantárticas, como las islas Georgias del Sur, las islas Malvinas, las islas Crozet, entre otros.", "photo": require("../Images/species/Acaena_magellanica.jpg")},
  4: {"id": "Acaena ovalifolia", "name": "Acaena ovalifolia", "genre": "Acaena", "specie": "Ovalifolia", "description": "Se trata de una hierba perenne rizomatosa, con follaje ralo y tallos tendidos en el suelo en forma horizontal hacia los extremos y también erectos de hasta 15 cm.", "photo": require("../Images/species/Acaena_ovalifolia.jpg")},
  5: {"id": "Armeria maritima", "name": "Siempreviva", "genre": "Armeria", "specie": "Maritima", "description": "Hierba perenne, rizomatosa, con hojas cespitosas, en rosetas, crece aislada o formando manchones de céspedes o montículos. Es nativa de Eurasia, crece asilvestrada en suelos desnudos, rocosos, en la zona cordillerana.", "photo": require("../Images/species/Armeria_maritima.jpg")},
  6: {"id": "Berberis empetrifolia", "name": "Calafate Enano", "genre": "Berberis", "specie": "empetrifolia", "description": "Berberis empetrifolia es una especie perteneciente a la familia de las berberidáceas. Es originaria de Argentina y Chile.​", "photo": require("../Images/species/Berberis_empetrifolia.jpg")},
  7: {"id": "Cardamine amara", "name": "Berro Amargo Grande", "genre": "Cardamine", "specie": "Amara", "description": "Cardamine amara, conocida como berro amargo grande, es una especie de planta con flores en la familia Brassicaceae. Es una planta perenne con tallos verticales, en su mayoría no ramificados, de hasta 70 cm de altura, y hojas formadas por entre tres y 13 folíolos.", "photo": require("../Images/species/Cardamine_amara.jpg")},
  8: {"id": "Chiliotrichum rosmarinifolium", "name": "Mata Negra", "genre": "Chiliotrichum", "specie": "Rosmarinifolium", "description": "Frecuente en bordes de arroyos y mallines de altura, y en el límite con el bosque, en terrenos rocosos y abiertos. Cordillera de los Andes desde el centro de Chile y Argentina hasta Tierra del Fuego.", "photo": require("../Images/species/Chiliotrichum_rosmarinifolium.jpg")},
  9: {"id": "Embothrium coccineum", "name": "Ciruelillo-Notro", "genre": "Embothrium", "specie": "coccineum", "description": "Embothrium coccineum, es un pequeño árbol perennifolio de la familia Proteaceae. Crece en los bosques templados de Chile y de Argentina.", "photo": require("../Images/species/Embothrium_coccineum.jpg")},
  10: {"id": "Luzuriaga radicans", "name": "Azahar de Monte", "genre": "Luzuriaga", "specie": "Radicans", "description": "Luzuriaga radicans es una especie fanerógama perteneciente a la familia de las alstroemeriáceas. El epíteto específico «radicans» hace referencia a las raíces trepadoras características de esta especie.", "photo": require("../Images/species/Luzuriaga_radicans.jpg")},
  11: {"id": "Maytenus boaria", "name": "Maitén", "genre": "Maytenus", "specie": "Boaria", "description": "Maitén, también conocida como maitén grande, horco-molle (en Córdoba), sauce patagónico, o naranjita. Crece preferentemente en zonas de transición, semiáridas, o cerca de ríos o esteros, en suelos no muy húmedos", "photo": require("../Images/species/Maytenus_boaria.jpg")},
  12: {"id": "Nothofagus antarctica", "name": "Ñire", "genre": "Nothofagus", "specie": "Antarctica", "description": "Nothofagus antarctica —comúnmente llamado ñire, ​ ñirre o haya antártica— es un árbol caducifolio nativo del bosque andino patagónico desde la latitud 33° S hasta Tierra del Fuego. En Argentina, desde Neuquén hasta Tierra del Fuego y en Chile se distribuye entre las regiones de O Higgins y de Magallanes.", "photo": require("../Images/species/Nothofagus_antarctica.jpg")},
  13: {"id": "Nothofagus pumilio", "name": "Lenga", "genre": "Nothofagus", "specie": "pumilio", "description": "La lenga, roble de Tierra del Fuego, haya austral o roble blanco, es un árbol de la familia de las Nothofagaceae. Es una especie representativa del bosque andino patagónico del sur de Argentina y de Chile.", "photo": require("../Images/species/Nothofagus_pumilio.jpg")},
  14: {"id": "Nothofagus betuloides", "name": "Coihüe de Magallanes", "genre": "Nothofagus", "specie": "Betuloides", "description": "Nothofagus betuloides, guindo, coihue blanco o coigüe de Magallanes, es una especie de árbol perteneciente a la familia Nothofagaceae. Es originario de Sudamérica.", "photo": require("../Images/species/Nothofagus_betuloides.jpg")},
  15: {"id": "Drimys winteri", "name": "Canelo de Magallanes", "genre": "Drimys", "specie": "Winteri", "description": "El canelo de Magallanes​ es un árbol siempreverde que habita en gran parte del territorio de Argentina y Chile. Es uno de los árboles sagrados del pueblo mapuche y en su idioma se llama foye o foyke.​", "photo": require("../Images/species/Drimys_winteri.jpg")},
  16: {"id": "Gleichenia quadripartita", "name": "Helecho - Yerba Loza", "genre": "Gleichenia", "specie": "Quadripartita", "description": "Gleichenia quadripartita conocida localmente como yerba loza, palmita, pata de cucho y bi-iúl, es un helecho nativo de Chile con una distribución natural que va desde la latitud de Concepción en el norte hasta la región de Magallanes en el sur, incluidas las partes adyacentes de Argentina.", "photo": require("../Images/species/Gleichenia_quadripartita.jpg")},
  17: {"id": "Gavilea lutea", "name": "Orquidea", "genre": "Gavilea", "specie": "Lutea", "description": "Gavilea lutea es una especie de orquídea de hábito terrestre originaria de Chile y Argentina.​", "photo": require("../Images/species/Gavilea_lutea.jpg")},
  18: {"id": "Blechnum penna-marina", "name": "Punque Pequeño", "genre": "Blechnum", "specie": "penna-marina", "description": "Es originaria de la Región de la Araucanía hacia el sur y desde la costa hasta la línea arbolada de los bosques Magallánicos en Chile y áreas adyacentes de Argentina. También se encuentra en Australia y algunas islas del Pacífico.", "photo": require("../Images/species/Blechnum_penna-marina.jpg")},
  19: {"id": "Chloraea magellanica", "name": "Orquidea", "genre": "Chloraea", "specie": "Magellanica", "description": "Chloraea magellanica es una especie de orquídea de hábito terrestre originaria de Sudamérica.", "photo": require("../Images/species/Chloraea_magellanica.jpg")},
  20: {"id": "Viola reichei", "name": "Violeta amarilla", "genre": "Viola", "specie": "Reichei", "description": "Es una bella planta herbácea de unos 10 cm de altura, perenne, provista de un largo y delgado rizoma. Presenta hojas alternas largamente pecioladas, de forma orbicular a reniforme, con borde ondulado, de casi 2 cm de largo, con nervadura incisa.", "photo": require("../Images/species/Viola_reichei.jpg")},
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  speciesRequest: ["data"],
  speciesSuccess: ["payload"],
  speciesFailure: null,
  //
  updateSelectedSpecie: ['specie'],
  updateType: ['type']
})

export const SpeciesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  //
  wildlifeSPA: wildlife_SPA,
  wildlifeENG: wildlife_ENG,
  floraSPA: flora_SPA,
  floraENG: flora_ENG,
  selectedSpecie: null,
  selectedType: null
})

/* ------------- Selectors ------------- */

export const SpeciesSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

//
export const updateSelectedSpecie = (state, { specie }) => {
  return state.merge({ selectedSpecie: specie })
}

//
export const updateType = (state, { type }) => {
  return state.merge({ selectedType: type })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SPECIES_REQUEST]: request,
  [Types.SPECIES_SUCCESS]: success,
  [Types.SPECIES_FAILURE]: failure,
  //
  [Types.UPDATE_SELECTED_SPECIE]: updateSelectedSpecie,
  [Types.UPDATE_TYPE]: updateType
})
