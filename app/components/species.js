SpeciesController.$inject = [];

function SpeciesController(){
  this.current_especie = {};

  this.$onInit = function() {
    this.current_especie = this.list[0];
  };

  this.previousSpecies = function(){
    var list_length = this.list.length;
    var species_index = this.list.indexOf(this.current_especie);

    if(list_length>1 && species_index>0){
      this.current_especie = this.list[species_index-1];
    }else{
      this.current_especie = this.list[list_length-1];
    }
  }

  this.nextSpecies = function(){
    var list_length = this.list.length;
    var species_index = this.list.indexOf(this.current_especie);

    if(list_length>1 && species_index<(list_length-1)){
      this.current_especie = this.list[species_index+1];
    }else{
      this.current_especie = this.list[0];
    }
  }


};

var SpeciesComponent = {
  templateUrl: '../app/templates/components/species.html',
  controller: SpeciesController,
  bindings: {
    list: '=',
    category: '@'
  }
};

export default SpeciesComponent;
