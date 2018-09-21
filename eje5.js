function area(r){
    if(r<=0){
        return "ERROR:El radio debe ser mayor que cero.";
    }else{
        return "Area="+ (Math.PI * (Math.pow(r,2)));
    }
}