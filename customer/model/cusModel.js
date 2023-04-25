function Product(_name, _price, _screen,_backCamera, _frontCamera,  _img, _desc, _type){
    this.name = _name,
    this.price = _price,
    this.screen = _screen,
    this.backCamera = _backCamera,
    this.frontCamera = _frontCamera,
    this.img = _img,
    this.desc = _desc,
    this.type = _type
    // this.realPrice = function(){
    //     return (this.price)*1 + 300
    // }
}

function Cart(_name, _price, _img, _quality ){
    this.name = _name,
    this.price = _price,
    this.img = _img,
    this.quality = _quality
}