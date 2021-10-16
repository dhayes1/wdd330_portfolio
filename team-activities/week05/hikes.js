//create an array of hikes
class Hikes{
    constructor (_name, _imgSrc, _imgAlt, _distance, _difficulty, _description, _directions) {
      this.name = _name;
      this.imgSrc = _imgSrc;
      this.imgAlt = _imgAlt;
      this.distance = _distance;
      this.difficulty = _difficulty;
      this.description = _description;
      this.directions = _directions;
    }

    get name() = { return this.name; }
}

export default class {Hikes};