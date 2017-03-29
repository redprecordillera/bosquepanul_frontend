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

};

export default AppController;
