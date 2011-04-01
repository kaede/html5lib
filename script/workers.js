/**
 * User: kaede
 */

onmessage = function(e){

    if(e.data[0] == "start"){
        start(e.data[1],e.data[2],e.data[3],e.data[4]);
    }

};

function start(data,w,h,l){
    importScripts("gasket.js");
    var gasket = new Gasket(w,h,l);

    for(var i=0;i<1000000;i++){
        var p = gasket.update();
        var index = ((w*Math.floor(p.y))+Math.floor(p.x))*4;
        data[index + 0] = 51; // �� red
        data[index + 1] = 51; // �� green
        data[index + 2] = 51; // �� blue
        data[index + 3] = 255; // �����x alpha
    }
    postMessage(data);
}
