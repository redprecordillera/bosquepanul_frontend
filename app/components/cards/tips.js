TipsCardController.$inject = [];

function TipsCardController(){
};

var TipsCardComponent = {
  templateUrl: '../../app/templates/components/cards/tips.html',
  controller: TipsCardController,
  bindings: {
    tip: '=',
    previousTip: '&',
    nextTip: '&'
  }
};

export default TipsCardComponent;
