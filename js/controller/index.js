/**
*@date 13/1/2017
*@name index.js
*@version 1.0
*@author Jean Andrade
 @description containts the angular code
*/


// jQuery code
$(document).ready(function () {

});


(function(){


angular.module('FurnituresApp').controller('FurnituresController', ['$scope', '$window', function($scope, $window){

//  app.controller("FurnituresController", function($scope) {
    // Controller properties
    this.furnitureTypes; // Type of furnitures in the system
    this.furnitureType; // Selected value in the select
    this.nFurnitures; // Number of furnitures to add
    this.furnitures; // Furniture data to add

    // Scope variables
    // action: {"init", "add-furnitures"}
    $scope.action = "init";

    this.initialize = function () {

      this.furnitureTypes = [];
      var furnitureTypeNames = ["Chair", "Table", "Bed"];

      // Create the objects and push into this.furnitureTypes
      for (var i = 0; i < furnitureTypeNames.length; i++) {
        var furnitureTypeObj = new FurnitureType();
        furnitureTypeObj.construct(i, furnitureTypeNames[i]);
        this.furnitureTypes.push(furnitureTypeObj);
      }

      // Default values
      this.furnitureType = this.furnitureTypes[0];
      this.nFurnitures = 3;

    };

    this.initializeAddFurnituresForm = function () {
      this.furnitures = [];
      // We construct the furniture objects with the selected parameters and the default values
      for (var i = 0; i < this.nFurnitures; i++) {
        var furnitureObj = new Furniture();
        // id, idFurnitureType, name, director, price, available
        furnitureObj.construct(i, this.furnitureType.getName(), "", "",true);
        this.furnitures.push(furnitureObj);
      }
    };

    this.validNFurnitures = function () {
      return (!isNaN(this.nFurnitures) && this.nFurnitures >= 1 && this.nFurnitures % 1 === 0 && this.nFurnitures !== "");
    };

    this.validFurnitureEntryDate = function (i) {

      var dateString = this.furnitures[i].getEntryDate();

      var regEx = /^\d{4}-\d{2}-\d{2}$/;
      if(!dateString.match(regEx)){return false;}

      var d;
      if(!((d = new Date(dateString))|0)){return false;}
      else {
        return true;
      }

    };




    this.validFurniturePrice = function (i) {
      return (!isNaN(this.furnitures[i].getPrice()) && this.furnitures[i].getPrice() > 0 && this.furnitures[i].getPrice() !== "");
    };

    // Get an Array with dimension num
    $scope.getNumber = function(num) {
      var a = [];
      for(var i=0; i<num; i++) a.push(i);
      return a;
    }

    this.addFurnituresForm = function () {
      if (this.validNFurnitures()) {
        this.initializeAddFurnituresForm();
        $scope.action= "add-furnitures";
      }
    }

    this.validForm = function () {
      for (var i = 0; i < this.furnitures.length; i++) {
        if (!this.validFurnitureEntryDate(i) || !this.validFurniturePrice(i)) return false;
      }
      return true;
    }

    this.popupResult = function () {

      if (this.validForm()) {
        var introduce= confirm("are you sure to introuce this data?");
        if(introduce){
        var popupWindow = window.open('view/popup/popup.html');
        $scope.action= "init";}
      }
    }

    this.initialize();

  }]);

angular.module('FurnituresApp').directive("addFurnituresViewForm", function () {
  return {
    restrict: 'E', // type of directive
    templateUrl:"view/templates/add-furnitures-view-form.html",
    controller: function() {
      // When the document is ready execute this code
    },
    controllerAs: 'addFurnituresViewFormCtrl' // This is the alias
  };
});

})();
