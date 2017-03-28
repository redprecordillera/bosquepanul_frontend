SpeciesCardController.$inject = [];

function SpeciesCardController(){
  // this.$onInit = function() {
  //   this.species = {};
  // };
};

var SpeciesCardComponent = {
  templateUrl: '../../app/templates/components/cards/species.html',
  controller: SpeciesCardController,
  bindings: {
    species: '=',
    category: '<'
  }
};

export default SpeciesCardComponent;
