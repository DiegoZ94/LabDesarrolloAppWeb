const prompt = require("prompt"); 
prompt.start();

var mateBasica = require('./mate'); 
    /*do {
        prompt.get(['option', 'n1', 'n2'], function(err, result){
            if (err){
                console.log("Opción desconocida, inténtalo de nuevo");
            }
            console.log("Escribe el número de opción a ejecutar:\n\t1) Suma.\n\t2) Resta.\n\t3) Multiplicación.\n\t4) División.\n\t5) Módulo.\n\6) Salir del programa." + result.option);
            console.log("Escribe el primer número: " + result.n1a);
            console.log("Escribe el segundo número: " + result.n2a);
            n1 = parseFloat(result.n1a)
            n2 = parseFloat(result.n2a)
            switch (parseInt(result.option)) {
                case 1:
                    console.log(mateBasica.suma(n1,n2));        
                    break;
                case 2:
                    console.log(mateBasica.resta(n1,n2));
                    break; 
                case 3:
                    console.log(mateBasica.multiplicacion(n1,n2));        
                    break; 
                case 4:
                    console.log(mateBasica.division(n1,n2));        
                    break;
                case 5:
                    console.log(mateBasica.modulo(n1,n2));    
                    break; 
                case 6:
                    console.log("Hasta luego")          
                    break;
                default:
                    console.log("Opción desconocida, inténtalo de nuevo")
                    break;
            }      
        });
           
    } while (parseInt(result.option) != 6);*/
    option = false;
    do {
        prompt.get(['option', 'n1', 'n2'], function(err, result){
            if (err){
                console.log("Opción desconocida, inténtalo de nuevo");
            }
            console.log("Escribe el número de opción a ejecutar:\n\t1) Suma.\n\t2) Resta.\n\t3) Multiplicación.\n\t4) División.\n\t5) Módulo.\n\6) Salir del programa." + result.option);
            console.log("Escribe el primer número: " + result.n1);
            console.log("Escribe el segundo número: " + result.n2);
            n1 = parseFloat(result.n1);
            n2 = parseFloat(result.n2);
            switch (parseInt(result.option)) {
                case 1:
                    console.log(mateBasica.suma(n1,n2));        
                    break;
                case 2:
                    console.log(mateBasica.resta(n1,n2));
                    break; 
                case 3:
                    console.log(mateBasica.multiplicacion(n1,n2));        
                    break; 
                case 4:
                    console.log(mateBasica.division(n1,n2));        
                    break;
                case 5:
                    console.log(mateBasica.modulo(n1,n2));    
                    break; 
                case 6:
                    console.log("Hasta luego");
                    option = true        
                    break;
                default:
                    console.log("Opción desconocida, inténtalo de nuevo")
                    break;
            }      
        });
           
    } while (option === false);
   




