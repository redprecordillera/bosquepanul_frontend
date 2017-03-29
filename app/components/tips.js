TipsController.$inject = [];

function TipsController(){
  this.$onInit = function() {
  };
};

var TipsComponent = {
  templateUrl: '../app/templates/components/tips.html',
  controller: TipsController,
  bindings: {
    list: '='
  }
};

export default TipsComponent;
