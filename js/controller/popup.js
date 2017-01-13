/**
*@date 13/1/2017
*@name index.js
*@version 1.0
*@author Jean Andrade
 @description containts the angular code used by the popUp
*/


// jQuery code
$(document).ready(function () {

});

(function(){
  angular.module('FurnituresApp').controller('PopUpController', ['$scope', '$window', function($scope, $window){

    // Controller properties
    this.furnitures; // Furniture data to show
    $scope.date= new Date();
    // Get an Array with dimension num

    $scope.getNumber = function(num) {
      var a = [];
      for(var i=0; i<num; i++) a.push(i);
        return a;
    }

    this.initialize = function () {


      // Load data from the window opener using angular object and DOM
      this.furnitures = $window.opener.angular.element('#Furnitures-ctrl').scope().FurnituresCtrl.furnitures;
      // console.log(this.furnitures);
    };

    this.close = function () {
      $window.close();
    };
    this.print = function () {
      $window.print();
    };

    this.initialize();

    this.sum = function(){
      var suma = 0;
      for (var i = 0; i < this.furnitures.length; i++) {
        suma += this.furnitures[i].getPrice();

      }
      return suma;
    }

  }]);

  angular.module('FurnituresApp').directive("popupResultViewForm", function () {
    //app.directive("popupViewForm", function () {
    return {
      restrict: 'E', // type of directive
      templateUrl:"../../view/templates/popup-result-view-form.html",
      controller: function() {
        // When the document is ready execute this code
      },
      controllerAs: 'popupViewFormCtrl' // This is the alias
    };
  });

})();
