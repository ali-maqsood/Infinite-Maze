



function setup(){
    createCanvas(grid.boxSize * grid.xWidth +1, grid.boxSize * grid.yHeight +1);
    background(50);    
    for(var i = 0 ; i < grid.xWidth ; i++){
        for(var j = 0 ; j < grid.yHeight ; j++){
            fill(random(256) , random(256) , random(256));
            stroke(random(256) , random(256) , random(256));
        
            rect(grid.posx(i) , grid.posy(j), grid.boxSize , grid.boxSize);

        }
    }
}


function draw(){
    
}