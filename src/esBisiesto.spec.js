
import esBisiesto from "./esBisiesto.js";

describe( "Es bisiesto ", () => {
    it("el 4 deberia considerarse como bisiesto",() => { 
       expect(esBisiesto(4)).toEqual(true);
    });
    it("Si es divisible ente 400 es bisiesto",() => { 
        expect(esBisiesto(2000)).toEqual(true);
     });
     it("Si son divisibles por 100 pero no por 400 NO son años bisiestos",() => { 
        expect(esBisiesto(1700)).toEqual(false);
     });
     it("Si son divisibles por 4 pero no por 100  son años bisiestos",() => { 
        expect(esBisiesto(2008)).toEqual(true);
     });
     it("Si  no son divisibles por 4 no son años bisiestos",() => { 
        expect(esBisiesto(2017)).toEqual(false);
     });
});


