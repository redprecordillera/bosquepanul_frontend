TipsController.$inject = [];

function TipsController(){
  this.$onInit = function() {
    this.list[0].active=true;
  };

  this.previousTip = function(tip){
    var list_length = this.list.length;
    var tip_index = this.list.indexOf(tip);
    tip.active = false;
    if(list_length>1 && tip_index>0){
      this.list[tip_index-1].active = true;
    }else{
      this.list[list_length-1].active = true;
    }
  }

  this.nextTip = function(tip){
    var list_length = this.list.length;
    var tip_index = this.list.indexOf(tip);
    tip.active = false;
    if(list_length>1 && tip_index<(list_length-1)){
      this.list[tip_index+1].active = true;
    }else{
      this.list[0].active = true;
    }
  }
};

var TipsComponent = {
  templateUrl: '../app/templates/components/tips.html',
  controller: TipsController,
  bindings: {
    list: '='
  }
};

export default TipsComponent;
