


var grid = new function (){
    this.boxSize = 10; 
    this.xWidth = 70;
    this.yHeight = 60;
    
    this.posx = function (xBox){
        return this.boxSize * xBox; 
    }
    
    this.posy = function (yBox){
        return this.boxSize * yBox;
    }
}