GifPlayerDirective.$inject = [];

function GifPlayerDirective(){
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          element.bind('load', function() {
              $(element).gifplayer();
          });
          element.bind('error', function(){
              console.warn('image could not be loaded');
          });
      }
  };
};

export default GifPlayerDirective;
