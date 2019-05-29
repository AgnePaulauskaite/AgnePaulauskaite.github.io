(function () {
    'use strict'
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
  
    var tool = new tool();
    
    var c = Shape.Circle(200, 200, 8);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello word';

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'blue';

    };
    paper.view.draw();

}())


