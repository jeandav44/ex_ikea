function Furniture() {
  // Properties definition
  this.id;
  this.idFurnitureType;
  this.price;
  this.entryDate;
  this.inOffer;



  // Methods definition
  this.construct = function (id,idFurnitureType,price,entryDate,inOffer) {
    this.id = id;
    this.idFurnitureType = idFurnitureType;
    this.price = price;
    this.entryDate = entryDate;
    this.inOffer = inOffer;

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

  this.getEntryDate = function () {
      return this.entryDate;
    }

  this.getInOffer = function () {
    return this.inOffer;
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

  this.setEntryDate = function (entryDate) {
    this.entryDate = entryDate ;
  }

  this.setInOffer = function (inOffer) {
    this.inOffer = inOffer ;
  }



}
