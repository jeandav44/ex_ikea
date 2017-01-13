function Furniture() {
  // Properties definition
  this.id;
  this.idFurnitureType;
  this.price;
  this.inOffer;
  this.entryDate;


  // Methods definition
  this.construct = function (id, idFurnitureType, price,inOffer, entryDate) {
    this.id = id;
    this.idFurnitureType = idFurnitureType;
    this.price = price;
    this.inOffer = inOffer;
    this.entryDate = entryDate;
  }

//getters
  this.getId = function () {
    return this.id;
  }

  this.getIdFurnitureType = function () {
    return this.idFurnitureType;
  }


  this.getPrice = function () {
    return this.price;
  }

  this.getInOffer = function () {
    return this.inOffer;
  }

  this.entryDate = function () {
    return this.entryDate;
  }


//setters
  this.setId = function (id) {
    this.id = id;
  }

  this.setIdFurnitureType = function (idFurnitureType) {
    this.idFurnitureType = idFurnitureType;
  }

  this.setPrice = function (price) {
    this.price = price;
  }

  this.setInOffer = function (inOffer) {
    this.inOffer = inOffer ;
  }

  this.entryDate = function (entryDate) {
    this.entryDate = entryDate ;
  }

}
