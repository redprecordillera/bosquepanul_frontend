SpinnerOnLoadDirective.$inject = [];

function SpinnerOnLoadDirective(){
  return {
    scope: {
      ngSrc: '@'
    },
    link: function(scope, element) {
      element.on('load', function() {
        $(element).fadeTo(250, 1);
      });
      scope.$watch('ngSrc', function() {
        $(element).fadeTo(250, 0.6);
      });
    }
  };
};

export default SpinnerOnLoadDirective;
