SpeciesController.$inject = [];

function SpeciesController(){
  // this.$onInit = function() {
  //   this.species = {};
  // };
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
