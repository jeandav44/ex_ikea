// jQuery code
$(document).ready(function () {

});

// angularjs code
/* (function(){ // write your code here })(); */
(function(){
  // This is the instance of our angular app
  //var app = angular.module("FurnituresApp", []);

// http://stackoverflow.com/questions/20612484/angularjs-separating-directive-files-but-staying-on-the-same-module
// http://stackoverflow.com/questions/20087627/how-to-create-separate-angularjs-controller-files
// https://docs.angularjs.org/api/ng/directive/ngApp

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

    /*
    this.validFurnitureName = function (i) {
      return (this.furnitures[i].getName() !== "");
    };*/

    this.validFurnitureEntryDate = function (i) {
      return (this.furnitures[i].getEntryDate() !== "");
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
        if (/*!this.validFurnitureName(i) ||*/ !this.validFurnitureEntryDate || !this.validFurniturePrice(i)) return false;
      }
      return true;
    }

    this.popupResult = function () {
      if (this.validForm()) {
        var popupWindow = window.open('view/popup/popup.html');
        $scope.action= "init";
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
