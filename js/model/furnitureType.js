/**
*@date 13/1/2017
*@name index.js
*@version 1.0
*@author Jean Andrade
 @description implements the furniture type
*/

function FurnitureType() {
  // Properties definition
  this.id;
  this.name;

  // contructor
  this.construct = function (id, name) {
    this.id = id;
    this.name = name;
  }
//setters
  this.getId = function () {
    return this.id;
  }

  this.getName = function () {
    return this.name;
  }
//getters
  this.setId = function (id) {
    this.id = id;
  }

  this.setName = function (name) {
    this.name = name;
  }
}
