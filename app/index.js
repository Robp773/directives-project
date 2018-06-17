'use strict';

angular.module('root-app', [])
  .directive('optIn', function(){
    return{
      restrict: 'E',
      transclude: true,
      template: 

      '<div class="optIn">' +

        '<div ng-transclude class="transcludeDiv"></div>' +

        '<form class="optInForm">' +
        
        '<legend>Opt In</legend>' +

        '<input type=\'text\' placeholder=\'First Name\'/>'+ 
        '<input type=\'text\' placeholder=\'Last Name\'/>' +
        '<input type=\'text\' placeholder=\'Email\'/>' +

        '<button type=\'submit\'>Submit</button>' +

        '</form>'+

      '</div>',
    };
  })
  .controller('MainCtrl', function($http){

  });