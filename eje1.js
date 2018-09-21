function palindroma(palabra){
    var cadena = "";
    for(let i=palabra.length-1; i>=0; i--){
        cadena = cadena + palabra[i];
    }
    if(cadena == palabra){return true;}else{return false;}
}