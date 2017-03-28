SpeciesController.$inject = [];

function SpeciesController(){
  this.$onInit = function() {
    this.list[0].active=true;
  };

  this.previousSpecies = function(species){
    var list_length = this.list.length;
    var species_index = this.list.indexOf(species);
    species.active = false;
    if(list_length>1 && species_index>0){
      this.list[species_index-1].active = true;
    }else{
      this.list[list_length-1].active = true;
    }
  }

  this.nextSpecies = function(species){
    var list_length = this.list.length;
    var species_index = this.list.indexOf(species);
    species.active = false;
    if(list_length>1 && species_index<(list_length-1)){
      this.list[species_index+1].active = true;
    }else{
      this.list[0].active = true;
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
