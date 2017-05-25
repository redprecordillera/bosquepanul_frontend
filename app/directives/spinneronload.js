SpinnerOnLoadDirective.$inject = [];

function SpinnerOnLoadDirective(){
  return {
    scope: {
      ngSrc: '@'
    },
    link: function(scope, element) {
      var spinner;
      
      element.on('load', function() {
        $(element).show();
        $(spinner).remove();
      });
      scope.$watch('ngSrc', function() {
        spinner = $('<img class="u-full-width" src="assets/img/transparent.png" />').insertAfter(element);
        $(element).hide();
      });
    }
  };
};

export default SpinnerOnLoadDirective;
