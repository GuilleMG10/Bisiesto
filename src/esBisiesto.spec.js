
import esBisiesto from "./esBisiesto.js";

describe( "Es bisiesto ", () => {
    it("el 4 deberia considerarse como bisiesto",() => { 
       expect(esBisiesto(4)).toEqual(true);
    });
    it("Si es divisible ente 400 es bisiesto",() => { 
        expect(esBisiesto(2000)).toEqual(true);
     });
    
    
});


