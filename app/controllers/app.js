AppController.$inject = ['$scope'];

function AppController($scope){
  console.log("APPCONTROLLER");
  $scope.birds_list = [
    {
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
    }
  ];

  $scope.plants_list = [
    {
      "name": "bollén",
      "scientific_name": "Kageneckia oblonga",
      "vulnerability": "Fuera de Peligro",
      "description": "Árbol de hojas perennes  que presentan bordes aserrados y contextura dura. El fruto es una cápsula estrellada que contiene semillas aladas. Se puede encontrar en laderas de cerro cercanos a quebradas. Al igual que otras especies existentes en el valle central,  lamentablemente es cortado para su uso cómo combustible (elaboración de leña y carbón) o para la fabricación de diversas herramientas de uso agrícola. Alcanza hasta 15 metros de altura.",
      "image_url": "http://bosquepanul.cl/images/veg_01.png?crc=3813885780"
    },
    {
      "name": "peumo",
      "scientific_name": "Cryptocarya alba",
      "vulnerability": "Fuera de Peligro",
      "description": "Su tronco es recto o ligeramente tortuoso, ramificado, con corteza marrón y ligeramente agrietada puede alcanzar un metro de diámetro. Su madera es dura y resistente a la humedad. Sus hojas al ser trituradas desprenden un olor típico. Tiene un fruto que va del rosado al rojo y florece entre noviembre y enero. Alcanza hasta 15 metros de altura.",
      "image_url": "http://bosquepanul.cl/images/veg_02.png?crc=3997830110"
    },
    {
      "name": "guayacán",
      "scientific_name": "Porlieria chilensis",
      "vulnerability": "Vulnerable",
      "description": "Es un arbusto que puede alcanzar un diámetro de hasta 20 metros. Tiene ramas retorcidas, con hojas opuestas y en parejas de hasta 18 pares. las cuales tienen la facultad de plegarse sobre sí mismas durante la noche. Florece entre agosto y marzo y el fruto es una cápsula de color violeta oscuro. La madera es utilizada en artesanía y se caracteriza por su dureza. Alcanza hasta 5 metros de altura.",
      "image_url": "http://bosquepanul.cl/images/veg_03.png?crc=4214628183"
    },
    {
      "name": "flor de gallo",
      "scientific_name": "Alstroemeria ligtu",
      "vulnerability": "Vulnerable",
      "description": "Esta planta durante épocas de estrés por las condiciones de su ambiente, se seca perviviendo en raíces engrosadas, tubérculos o bulbos que durante mejores condiciones vuelven a brotar. En la zona central crece en invierno con la ayuda de las lluvias, en lugares soleados, pedregosos o arenosos con buena filtración. Sus flores pueden ser de distintos colores como rojo, amarillo o rosadas.",
      "image_url": "http://bosquepanul.cl/images/veg_04-crop-u45722.png?crc=271822623"
    },
    {
      "name": "espino",
      "scientific_name": "Acacia caven",
      "vulnerability": "Fuera de Peligro",
      "description": "Es un árbol espinoso de madera dura que florece entre agosto y octubre. Su fruto es  una legumbre negra y gruesa. Dada la dureza de la madera, es utilizado para fabricar objetos torneados, además de usarse para carbón y leña. Su follaje presenta un color verde claro de textura fina, y está integrado por hojas compuestas. Alcanza entre 2 y 6 metros de altura.",
      "image_url": "http://bosquepanul.cl/images/veg_05.png?crc=3929645599"
    },
    {
      "name": "quisco",
      "scientific_name": "Echinopsis chiloensis",
      "vulnerability": "Fuera de Peligro",
      "description": "Crece principalmente en forma de candelabro ramificado, recto, vigoroso y de hasta 8 metros de largo. Los brotes son cilíndricos de 10 a 12 cm de diámetro. Es frecuente en laderas de exposición norte, en zonas secas o pedregosas.",
      "image_url": "http://bosquepanul.cl/images/veg_06.png?crc=237465037"
    },
    {
      "name": "chagual",
      "scientific_name": "Puya chilensis",
      "vulnerability": "Fuera de Peligro",
      "description": "Planta de hoja verdes y alargadas con espinas en sus bordes que crece lentamente, tarda hasta veinte años en florecer. Su atractivo principal lo constituye un tallo floral de 2 a 5 metros con flores verdes amarillentas. Hospeda en su interior la larva de la mariposa del chagual, la que se desarrolla en el interior matándola.",
      "image_url": "http://bosquepanul.cl/images/veg_07.png?crc=4105176426"
    },
    {
      "name": "añañuca",
      "scientific_name": "Rhodophiala rhodolirion",
      "vulnerability": "Vulnerable",
      "description": "Es una planta bulbosa y perenne de alto valor ornamental. Tiene flores de color rojas o blancas con 6 pétalos. Crecen en pleno sol sin ninguna protección en lugares planos o laderas de exposición norte. Su nombre está asociado a una leyenda de amor en la época de independencia sobre una joven indígena llamada Añañuca.",
      "image_url": "http://bosquepanul.cl/images/veg_08.png?crc=3796092361"
    },
    {
      "name": "litre",
      "scientific_name": "Lithraea caustica",
      "vulnerability": "Fuera de Peligro",
      "description": "Es uno de los árboles más conocidos de la Zona Central de Chile, tanto por su abundancia como por sus sustancias alérgenas, y según la creencia popular hay que saludarlo cuando se le ve en el bosque para evitar la alergia. Cuando florece, sus abundantes flores atraen a muchos insectos, éstas luego generan frutos con una sola semilla cada uno, que son comestibles tanto para aves y roedores como para seres humanos. Crece especialmente en laderas de cerros y en lugares abiertos. Alcanza hasta 6 metros de altura.",
      "image_url": "http://bosquepanul.cl/images/veg_09.png?crc=4246291524"
    },
    {
      "name": "quillay",
      "scientific_name": "Quillaja saponaria",
      "vulnerability": "Fuera de Peligro",
      "description": "Es un pequeño árbol de un metro de diámetro en su tronco. Las ramas terminales son predominantemente colgantes. Su corteza es de color gris-cenicienta y rasguñada, además de ser rica en saponina. El fruto es una cápsula leñosa formada por cinco folículos estrellados que permanecen en el árbol, secos y abiertos, durante mucho tiempo. Alcanza hasta 20 metros de altura.",
      "image_url": "http://bosquepanul.cl/images/veg_010.png?crc=423985121"
    },
    {
      "name": "maitén",
      "scientific_name": "Maytenus boaria",
      "vulnerability": "Fuera de Peligro",
      "description": "Es una árbol de corteza agrietada de color grisáceo, puede alcanzar un diámetro de un metro en su base. Sus ramas son generalmente largas y colgantes. Y puede alcanzar hasta 25 metros de altura.",
      "image_url": "http://bosquepanul.cl/images/veg_011.png?crc=74356718"
    }
  ];

  $scope.reptiles_list = [
    {
      "name": "iguana chilena",
      "scientific_name": "Callopistes maculatus",
      "vulnerability": "Vulnerable",
      "description": "Es el reptil más grande del país, alcanzando casi medio metro de largo. Sus colores le permiten camuflarse en su hábitat de zonas de matorral con presencia de roqueríos. Es un activo predador que caza lagartijas, pequeños mamíferos e insectos.",
      "image_url": "http://bosquepanul.cl/images/rep_01.png?crc=508820980"
    },
    {
      "name": "lagartija esbelta",
      "scientific_name": "Liolaemus tenuis",
      "vulnerability": "Vulnerable",
      "description": "Puede medir casi 20 centímetros de largo, se alimenta de insectos y presentan dimorfismo sexual; mientras el macho posee colores brillantes y llamativos, la hembra  presenta colores más grisáceos y unas cuántas escamas coloreadas. El macho posee un territorio y un harén de hembras. cuando otro macho se acerca, se pone a cabecear para mostrarse intimidante.",
      "image_url": "http://bosquepanul.cl/images/rep_02.png?crc=369508533"
    },
    {
      "name": "culebra de cola corta",
      "scientific_name": "Tachymenis chilensis",
      "vulnerability": "Vulnerable",
      "description": "Posee una coloración marrón con distintos matices y diseños, alcanza hasta 70 centímetros. Prefiere vivir entre matorral y laderas de cerros. Posee veneno, aunque no lo inyecta con su mordedura, si no que “gotea” desde su encía por su colmillo. Este veneno no es letal para el ser humano. Se alimenta de pequeños vertebrados, a los cuales mata por asfixia.",
      "image_url": "http://bosquepanul.cl/images/rep_03.png?crc=517684194"
    },
    {
      "name": "culebra de cola larga",
      "scientific_name": "Philodryas chamissonis",
      "vulnerability": "Vulnerable",
      "description": "Puede llegar a medir hasta 220 cm de longitud aproximadamente, pone seis a ocho huevos alargados, entre agosto y enero. Su dieta se compone principalmente de roedores, conejos juveniles, insectos y otros reptiles pequeños. Caza a sus presas usando la constricción, aunque también usa su veneno.",
      "image_url": "http://bosquepanul.cl/images/rep_04.png?crc=9593387"
    },
    {
      "name": "alacrán",
      "scientific_name": "Orden: Scorpiones",
      "vulnerability": "Fuera de Peligro",
      "description": "Pertenece a la familia de los arácnidos,  están provistos de un par de apéndices en forma de pinza, una cola acabada en un aguijón. Alcanzan entre 3 y 9 cm, siendo muy pequeños. Se alimenta de diversos animales invertebrados como insectos o arañas y presenta hábitos nocturnos.",
      "image_url": "http://bosquepanul.cl/images/bic_01.png?crc=3888171352"
    },
    {
      "name": "cigarra",
      "scientific_name": "Cicadidae",
      "vulnerability": "Fuera de Peligro",
      "description": "Miden entre 1,5 y 6,5 cm de largo. Poseen un aparato bucal suctor que les permite alimentarse de savia de los árboles y otras plantas. Es notorio el canto entonado por los machos para atraer a las hembras, emitiendo un sonido característico y más intenso al anochecer y amanecer.",
      "image_url": "http://bosquepanul.cl/images/bic_02.png?crc=4293403061"
    },
    {
      "name": "araña pollito",
      "scientific_name": "Grammostola porteri",
      "vulnerability": "Inadecuadamente Conocido",
      "description": "Tienen una tonalidad marrón que predomina en todo su cuerpo. El abdomen presenta pelos café, grises y negros. Se le encuentra habitando madrigueras construidas por ella misma directamente en el suelo, las cuales pueden llegar a los 30cm de profundidad. Los ejemplares adultos pueden llegar a medir 15 centímetros con las patas extendidas.",
      "image_url": "http://bosquepanul.cl/images/bic_03.png?crc=355808950"
    },
    {
      "name": "mariposa del chagual",
      "scientific_name": "Castnia psittachus",
      "vulnerability": "En Peligro",
      "description": "Es quizá la mariposa más grande de nuestro país con una envergadura de hasta 10 centímetros. Las hembras apareadas vuelan hacia las plantas chaguales donde depositan sus huevos en la base de estas plantas. Al eclosionar, sus larvas se desarrollan subsistiendo de esta planta de la que emergerán luego como mariposas adultas.",
      "image_url": "http://bosquepanul.cl/images/bic_04.png?crc=177368290"
    },
    {
      "name": "iguana chilena",
      "scientific_name": "Callopistes maculatus",
      "vulnerability": "Vulnerable",
      "description": "Es el reptil más grande del país, alcanzando casi medio metro de largo. Sus colores le permiten camuflarse en su hábitat de zonas de matorral con presencia de roqueríos. Es un activo predador que caza lagartijas, pequeños mamíferos e insectos.",
      "image_url": "http://bosquepanul.cl/images/rep_01.png?crc=508820980"
    }
  ];

  $scope.tips = [
    {
      "message": "Planifica y prepara tu viaje",
      "image_url": "http://bosquepanul.cl/images/frame_01354x345.png?crc=486653381"
    },
    {
      "message": "Dispone adecuadamente de tus desechos",
      "image_url": "http://bosquepanul.cl/images/frame_02331x323.png?crc=210138108"
    },
    {
      "message": "No hagas fogatas",
      "image_url": "http://bosquepanul.cl/images/frame_03255x311.png?crc=3870677252"
    },
    {
      "message": "Evita llevar mascotas",
      "image_url": "http://bosquepanul.cl/images/frame_04257x216.png?crc=367822488"
    },
    {
      "message": "Deja en el bosque lo que es del bosque",
      "image_url": "http://bosquepanul.cl/images/frame_05352x344.png?crc=145887399"
    },
    {
      "message": "Utiliza senderos establecidos",
      "image_url": "http://bosquepanul.cl/images/frame_06269x263.png?crc=3797328173"
    }
  ];

};

export default AppController;
