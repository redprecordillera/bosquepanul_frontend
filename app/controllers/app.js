AppController.$inject = ['$scope'];

function AppController($scope){
  console.log("APPCONTROLLER");
  $scope.species_list = [{
    "name": "TIJERAL",
    "scientific_name": "Leptasthenura aegithaloides",
    "vulnerability": "Fuera de Peligro",
    "description": "Tiene una longitud de 16 cm. Se alimenta de insectos, larvas y otros invertebrados terrestres. Anida desde septiembre con dos puestas al año. El nido, tipo taza, lo ubica en oquedades de árboles, techos de casas o muros y está fabricado de palos, ramitas u otras fibras vegetales e interiormente forrado de plumas. Es muy activa.",
    "image_url": "http://bosquepanul.cl/images/ave_01.png?crc=4157276907"
  }];
};

export default AppController;
