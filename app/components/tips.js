TipsController.$inject = [];

function TipsController(){
  this.current_tip = {};

  this.$onInit = function() {
    this.current_tip = this.list[0];
  };

  this.previousTip = function(){
    var list_length = this.list.length;
    var tip_index = this.list.indexOf(this.current_tip);

    if(list_length>1 && tip_index>0){
      this.current_tip = this.list[tip_index-1];
    }else{
      this.current_tip = this.list[list_length-1];
    }
  }

  this.nextTip = function(){
    var list_length = this.list.length;
    var tip_index = this.list.indexOf(this.current_tip);

    if(list_length>1 && tip_index<(list_length-1)){
      this.current_tip = this.list[tip_index+1];
    }else{
      this.current_tip = this.list[0];
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
