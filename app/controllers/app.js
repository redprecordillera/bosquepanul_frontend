AppController.$inject = ['$scope'];

function AppController($scope){
  console.log("APPCONTROLLER");
  $scope.birds_list = [{
    "name": "TIJERAL",
    "scientific_name": "Leptasthenura aegithaloides",
    "vulnerability": "Fuera de Peligro",
    "description": "Tiene una longitud de 16 cm. Se alimenta de insectos, larvas y otros invertebrados terrestres. Anida desde septiembre con dos puestas al año. El nido, tipo taza, lo ubica en oquedades de árboles, techos de casas o muros y está fabricado de palos, ramitas u otras fibras vegetales e interiormente forrado de plumas. Es muy activa.",
    "image_url": "http://bosquepanul.cl/images/ave_01.png?crc=4157276907"
  },{
    "name": "tenca",
    "scientific_name": "Mimus thenca",
    "vulnerability": "Fuera de Peligro",
    "description": "Posee un hermoso y variado canto, es conocida por imitar a otras aves. Acostumbra a pararse en las ramas más altas o en la misma punta de los árboles y arbustos. Posee una longitud de unos 28 cm de largo. Similar al zorzal en cuanto a tamaño, la tenca es más delgada y con la cola más larga.",
    "image_url": "http://bosquepanul.cl/images/ave_02.png?crc=3823100294"
  },{
    "name": "pequén",
    "scientific_name": "Athene cunicularia",
    "vulnerability": "Fuera de Peligro",
    "description": "Es un búho pequeño de unos 23 cm de largo. Tiene ojos amarillos, y cejas claras. El dorso es castaño oscuro moteado de blanco. Tiene hábitos terrestres, anida en madrigueras y caza planeando, a menudo de día. Se alimenta de reptiles pequeños e insectos.",
    "image_url": "http://bosquepanul.cl/images/ave_03.png?crc=14849829"
  },{
    "name": "Chercán",
    "scientific_name": "Troglodytes aedon",
    "vulnerability": "Fuera de Peligro",
    "description": "Es inconfundible por su pequeño tamaño, su color es café claro y la colita a veces parada. Tiene un largo total de 12 cm y ambos sexos no se diferencian en el color del plumaje. Vuela poco y a baja altura. Es muy inquieto y se mueve entre el ramaje de los arbustos, donde anda solo o en pareja.",
    "image_url": "http://bosquepanul.cl/images/ave_04.png?crc=382438859"
  },{
    "name": "Perdiz",
    "scientific_name": "Nothoprocta perdicaria",
    "vulnerability": "Fuera de Peligro",
    "description": "Tiene un cuerpo compacto y casi sin cola, es fácil de identificar por su estridente reclamo al arrancar volando, asustando generalmente al visitante. Vive entre matorrales y pastizales abiertos. Está presente en gran parte de los terrenos del Bosque Panul.",
    "image_url": "http://bosquepanul.cl/images/ave_05.png?crc=485888034"
  },{
    "name": "Loica",
    "scientific_name": "Sturnella loyca",
    "vulnerability": "Fuera de Peligro",
    "description": "Habita principalmente a ras de suelo en terrenos bajos y húmedos. Mide entre 26 y 28 cm. Busca su alimento al nivel del suelo, siendo las semillas y frutas su principal dieta. Suele andar en bandadas durante el invierno. Pone entre 3 y 4 huevos. El pecho rojo es característico del macho.",
    "image_url": "http://bosquepanul.cl/images/ave_06.png?crc=4086118248"
  },{
    "name": "Tordo",
    "scientific_name": "Curaeus curaeus",
    "vulnerability": "Fuera de Peligro",
    "description": "Es de fácil identificación por ser completamente negro brillante, nidifica entre octubre y diciembre. Suele desplazarse en bandadas y son muy bulliciosos al comunicarse entre si. Se alimenta de semillas, frutos y pequeños invertebrados.",
    "image_url": "http://bosquepanul.cl/images/ave_07.png?crc=236413169"
  },{
    "name": "Águila mora",
    "scientific_name": "Geranoaetus melanoleucus",
    "vulnerability": "Fuera de Peligro",
    "description": "Gran rapaz, fácil de identificar en vuelo por su forma triangular. Se alimenta de conejos, liebres, ratones, culebras y hasta zorros. Suele posarse en partes altas o sobrevolar largo rato una misma zona. A menudo se puede observar en laderas de las montañas y en los bordes del bosque, a veces se ve posada en las torres de alta tensión que cruzan el bosque. Mide entre 70 y 90 cm.",
    "image_url": "http://bosquepanul.cl/images/ave_08.png?crc=4107641897"
  },{
    "name": "Picaflor chico",
    "scientific_name": "Sephanoides sephaniodes",
    "vulnerability": "Fuera de Peligro",
    "description": "Es la segunda ave más pequeña de Chile con tan sólo 11 cms. Anida durante el verano, armando el nido en ramas altas o arbustos. Coloca 2 huevos de color blanco opaco durante los meses de octubre y noviembre. Se alimenta de insectos y especialmente néctar de flores.",
    "image_url": "http://bosquepanul.cl/images/ave_09.png?crc=3770829752"
  },{
    "name": "Cachudito",
    "scientific_name": "Anairetes parulus",
    "vulnerability": "Fuera de Peligro",
    "description": "Es una de las aves más pequeñas del país. Su principal característica son sus plumas oscuras y largas en la cabeza, dobladas hacia adelante. Tiene un largo de 11 cm. Muestra movimiento rápidos y ágiles.  Suele encontrarse en pequeñas bandadas, separándose durante la época de nidificación, se alimenta de insectos y semillas.",
    "image_url": "http://bosquepanul.cl/images/ave_010.png?crc=3901814263"
  },{
    "name": "Picaflor cordillerano",
    "scientific_name": "Oreotrochilus leucopleurus",
    "vulnerability": "Vulnerable",
    "description": "Se le encuentra exclusivamente en la Cordillera de los Andes y hasta el borde de nieves eternas de verano. Anida en las salientes rocosas verticales de las laderas cercanas a los riachuelos cordilleranos, construyéndolo entre Noviembre y Diciembre. Va adherido a esta pared rocosa con un líquido pegajoso hecho con el néctar de las flores o la clara de un huevo. Mide 13 cm. de largo.",
    "image_url": "http://bosquepanul.cl/images/ave_011.png?crc=3889604834"
  }];

  $scope.plants_list = [{
    "name": "litre",
    "scientific_name": "Lithraea caustica",
    "vulnerability": "Fuera de Peligro",
    "description": "Es uno de los árboles más conocidos de la Zona Central de Chile, tanto por su abundancia como por sus sustancias alérgenas, y según la creencia popular hay que saludarlo cuando se le ve en el bosque para evitar la alergia. Cuando florece, sus abundantes flores atraen a muchos insectos, éstas luego generan frutos con una sola semilla cada uno, que son comestibles tanto para aves y roedores como para seres humanos. Crece especialmente en laderas de cerros y en lugares abiertos. Alcanza hasta 6 metros de altura.",
    "image_url": "http://bosquepanul.cl/images/veg_09.png?crc=4246291524"
  }];

  $scope.reptiles_list = [{
    "name": "iguana chilena",
    "scientific_name": "Callopistes maculatus",
    "vulnerability": "Vulnerable",
    "description": "Es el reptil más grande del país, alcanzando casi medio metro de largo. Sus colores le permiten camuflarse en su hábitat de zonas de matorral con presencia de roqueríos. Es un activo predador que caza lagartijas, pequeños mamíferos e insectos.",
    "image_url": "http://bosquepanul.cl/images/rep_01.png?crc=508820980"
  }];

  $scope.tips = [{
    "message": "Deja en el bosque lo que es del bosque",
    "image_url": "http://bosquepanul.cl/images/frame_05352x344.png?crc=145887399"
  },{
    "message": "Utiliza senderos establecidos",
    "image_url": "http://bosquepanul.cl/images/frame_06269x263.png?crc=3797328173"
  }];

};

export default AppController;
