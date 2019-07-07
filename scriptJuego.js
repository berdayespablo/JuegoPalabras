
    var casillas = document.getElementsByClassName("block");
    var diccionario;
	var letra;
    var valor1;
    var valor2;
    var click = 0;
    var clickPista = 0;
    var acierto2;
    var acierto3;
    var acierto4;
    var acierto5;
    var acierto6;
    var arrayPistas = [];
    var palabra2;
    var palabra3;
    var palabra4;
    var palabra5;
    var palabra6;

    function pintarLetrasEnCasillas(){
    
    // Colección separada por número de letras
    var palabras2 = diccionario.filter(palabra => palabra.length == 2);
    var palabras3 = diccionario.filter(palabra => palabra.length == 3);
    var palabras4 = diccionario.filter(palabra => palabra.length == 4);
    var palabras5 = diccionario.filter(palabra => palabra.length == 5);
    var palabras6 = diccionario.filter(palabra => palabra.length == 6);

    // Selección de una palabra por grupo de número de letras
    palabra2 = palabras2[Math.floor((Math.random() * palabras2.length))];
    palabra3 = palabras3[Math.floor((Math.random() * palabras3.length))];
    palabra4 = palabras4[Math.floor((Math.random() * palabras4.length))];
    palabra5 = palabras5[Math.floor((Math.random() * palabras5.length))];
    palabra6 = palabras6[Math.floor((Math.random() * palabras6.length))];
    
    
    // Array para las pistas
    arrayPistas = [];
    arrayPistas.push(palabra2, palabra3, palabra4, palabra5, palabra6)

    // Crea los arrays de letras de cada palabra
    var letrasPalabra2 = palabra2.split('');
    var letrasPalabra3 = palabra3.split('');
    var letrasPalabra4 = palabra4.split('');
    var letrasPalabra5 = palabra5.split('');
    var letrasPalabra6 = palabra6.split('');

    // Las junta en un único array
    var arrayLetras =  letrasPalabra2
    .concat(letrasPalabra3).concat(letrasPalabra4).
    concat(letrasPalabra5).concat(letrasPalabra6);

        for (var i = 0; i < casillas.length; i++){
            letra = arrayLetras[Math.floor(Math.random() * arrayLetras.length)];
            eliminarElementoArray(arrayLetras, letra);
            casillas[i].innerHTML = letra;
        }
    }

    function eliminarElementoArray ( arr, item ) {
        var i = arr.indexOf( item );
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }

    function recogePosicion1(evt) {
        if (click == 0){
            valor1 = evt.srcElement;
        }
        click ++;
        document.getElementById(this.id).classList.add("seleccionado");
    };

    function recogePosicion2(evt) {
        if (click == 2){
            valor2= evt.srcElement;
            cambiarPosiciones(valor1, valor2);
            click = 0;
            eliminarSeleccionada();
        }
    };

    for (var i = 0; i < casillas.length; i++) {
        casillas[i].addEventListener('click', recogePosicion1, false);
        casillas[i].addEventListener('click', recogePosicion2, false);
    }

    function cambiarPosiciones (div1, div2){
        var divAux1 = div1;
        var divAux2 = div2;
        var valueAux1 = div1.innerText;
        var valueAux2 = div2.innerText;
        div1.innerHTML = valueAux2;
        div2.innerHTML = valueAux1;
    }

    function comprobarPalabra(){
        reseteaColores();
        reseteaAciertos();
        var letrasPalabraDe2 = [];
        var letrasPalabraDe3 = [];
        var letrasPalabraDe4 = [];
        var letrasPalabraDe5 = [];
        var letrasPalabraDe6 = [];

        letrasPalabraDe2.push(document.getElementById('block1').innerText, 
        document.getElementById('block2').innerText);

        var palabraDe2 = letrasPalabraDe2.join('');
        buscaEnDiccionario(palabraDe2, 2);

        letrasPalabraDe3.push(document.getElementById('block3').innerText, 
        document.getElementById('block4').innerText, document.getElementById('block5').innerText);

        var palabraDe3 = letrasPalabraDe3.join('');
        buscaEnDiccionario(palabraDe3, 3);

        letrasPalabraDe4.push(document.getElementById('block6').innerText, 
        document.getElementById('block7').innerText, document.getElementById('block8').innerText,
        document.getElementById('block9').innerText);

        var palabraDe4 = letrasPalabraDe4.join('');
        buscaEnDiccionario(palabraDe4, 4);

        letrasPalabraDe5.push(document.getElementById('block10').innerText, 
        document.getElementById('block11').innerText, document.getElementById('block12').innerText,
        document.getElementById('block13').innerText, document.getElementById('block14').innerText);

        var palabraDe5 = letrasPalabraDe5.join('');
        buscaEnDiccionario(palabraDe5, 5);

        letrasPalabraDe6.push(document.getElementById('block15').innerText, 
        document.getElementById('block16').innerText, document.getElementById('block17').innerText,
        document.getElementById('block18').innerText, document.getElementById('block19').innerText,
        document.getElementById('block20').innerText);

        var palabraDe6 = letrasPalabraDe6.join('');
        buscaEnDiccionario(palabraDe6, 6);

        comprobarVictoria();
    }

    function buscaEnDiccionario(palabra, fila){
        var result = diccionario.filter(function(p){
            return p == palabra;
        });
        if(result.length > 0){
            switch (fila) {
            case 2:
                var hijos = document.getElementById("dosLetras").children;
                for (var i=0; i<hijos.length; i++) {
                    var child = hijos[i];
                    document.getElementById(child.id).classList.add("acierto");
                    acierto2 = true;
                }
                break;
            case 3:
                var hijos = document.getElementById("tresLetras").children;
                for (var i=0; i<hijos.length; i++) {
                    var child = hijos[i];
                    document.getElementById(child.id).classList.add("acierto");
                    acierto3 = true;
                }
                break;
            case 4:
                var hijos = document.getElementById("cuatroLetras").children;
                for (var i=0; i<hijos.length; i++) {
                    var child = hijos[i];
                    document.getElementById(child.id).classList.add("acierto");
                    acierto4 = true;
                }
                break;
            case 5:
                var hijos = document.getElementById("cincoLetras").children;
                for (var i=0; i<hijos.length; i++) {
                    var child = hijos[i];
                    document.getElementById(child.id).classList.add("acierto");
                    acierto5 = true;
                }
                break;
            case 6:
                var hijos = document.getElementById("seisLetras").children;
                for (var i=0; i<hijos.length; i++) {
                    var child = hijos[i];
                    document.getElementById(child.id).classList.add("acierto");
                    acierto6 = true;
                }
                break;
            default:
                console.log('No se ha encontrado en el diccionario');
            }
            
        }
    }

    function eliminarSeleccionada(){
        var hijos2 = document.getElementById("dosLetras").children;

        for (var i=0; i<hijos2.length; i++) {
            var child = hijos2[i];
            document.getElementById(child.id).classList.remove("seleccionado");
        }

        var hijos3 = document.getElementById("tresLetras").children;

        for (var i=0; i<hijos3.length; i++) {
            var child = hijos3[i];
            document.getElementById(child.id).classList.remove("seleccionado");
        }
        var hijos4 = document.getElementById("cuatroLetras").children;

        for (var i=0; i<hijos4.length; i++) {
            var child = hijos4[i];
            document.getElementById(child.id).classList.remove("seleccionado");
        }
        var hijos5 = document.getElementById("cincoLetras").children;

        for (var i=0; i<hijos5.length; i++) {
            var child = hijos5[i];
            document.getElementById(child.id).classList.remove("seleccionado");
        }
        var hijos6 = document.getElementById("seisLetras").children;

        for (var i=0; i<hijos6.length; i++) {
            var child = hijos6[i];
            document.getElementById(child.id).classList.remove("seleccionado");
        }
    }

    function cargarIdioma(idioma){
        resetearTodo();
        switch (idioma) {
            case 'ES':
            diccionario = diccionarioES;
            pintarLetrasEnCasillas();
            document.getElementById("spanish").classList.add("active");
            document.getElementById("english").classList.remove("active");
            document.getElementById("euskera").classList.remove("active");
            document.getElementById("german").classList.remove("active");
            document.getElementById("asturiano").classList.remove("active");
            break;
            case 'EN':
            diccionario = diccionarioEN;
            pintarLetrasEnCasillas();
            document.getElementById("spanish").classList.remove("active");
            document.getElementById("english").classList.add("active");
            document.getElementById("euskera").classList.remove("active");
            document.getElementById("german").classList.remove("active");
            document.getElementById("asturiano").classList.remove("active");
            break;
            case 'EK':
            diccionario = diccionarioEK;
            pintarLetrasEnCasillas();
            document.getElementById("spanish").classList.remove("active");
            document.getElementById("english").classList.remove("active");
            document.getElementById("euskera").classList.add("active");
            document.getElementById("german").classList.remove("active");
            document.getElementById("asturiano").classList.remove("active");
            break;
            case 'GE':
            diccionario = diccionarioGE;
            pintarLetrasEnCasillas();
            document.getElementById("spanish").classList.remove("active");
            document.getElementById("english").classList.remove("active");
            document.getElementById("euskera").classList.remove("active");
            document.getElementById("german").classList.add("active");
            document.getElementById("asturiano").classList.remove("active");
            break;
            case 'AS':
            diccionario = diccionarioAS;
            pintarLetrasEnCasillas();
            document.getElementById("spanish").classList.remove("active");
            document.getElementById("english").classList.remove("active");
            document.getElementById("euskera").classList.remove("active");
            document.getElementById("german").classList.remove("active");
            document.getElementById("asturiano").classList.add("active");
            break;
            default:
            console.log('No se ha podido cargar idioma');
        }
    }

    function darPista(){
        if(clickPista < 5){
            do{
                var posicion = Math.floor((Math.random() * 6))
                var pista = arrayPistas[posicion];
            }while(pista == null);

            switch (posicion) {
                case 0:
                    // longitud 2
                    var letraPista;
                    for (var i = 0; i < casillas.length; i++){
                        if (casillas[i].innerText == pista.charAt(0) && casillas[i].classList.contains("intocable") == false){
                            letraPista = casillas[i];
                            break;
                        }
                    }

                    cambiarPosiciones(letraPista, document.getElementById("block1"));
                    document.getElementById("block1").classList.add("intocable");
                    document.getElementById("block1").classList.add("aciertoPista");
                    arrayPistas[0] = null;
                    clickPista ++;
                    break;
                case 1:
                    // longitud 3
                    var letraPista;
                    for (var i = 0; i < casillas.length; i++){
                        if (casillas[i].innerText == pista.charAt(0) && casillas[i].classList.contains("intocable") == false){
                            letraPista = casillas[i];
                            break;
                        }
                    }

                    cambiarPosiciones(letraPista, document.getElementById("block3"));
                    document.getElementById("block3").classList.add("intocable");

                    document.getElementById("block3").classList.add("aciertoPista");
                    arrayPistas[1] = null;
                    clickPista ++;
                    break;
                case 2:
                    // longitud 4
                    var letraPista;
                    for (var i = 0; i < casillas.length; i++){
                        if (casillas[i].innerText == pista.charAt(0) && casillas[i].classList.contains("intocable") == false){
                            letraPista = casillas[i];
                            break;
                        }
                    }

                    cambiarPosiciones(letraPista, document.getElementById("block6"));
                    document.getElementById("block6").classList.add("intocable");

                    document.getElementById("block6").classList.add("aciertoPista");
                    arrayPistas[2] = null;
                    clickPista ++;
                    break;
                case 3:
                    // longitud 5
                    var letraPista;
                    for (var i = 0; i < casillas.length; i++){
                        if (casillas[i].innerText == pista.charAt(0) && casillas[i].classList.contains("intocable") == false){
                            letraPista = casillas[i];
                            break;
                        }
                    }
    
                    cambiarPosiciones(letraPista, document.getElementById("block10"));
                    document.getElementById("block10").classList.add("intocable");
                    document.getElementById("block10").classList.add("aciertoPista");
                    arrayPistas[3] = null;
                    clickPista ++;
                    break;
                case 4:
                    // longitud 6                    
                    var letraPista;
                    for (var i = 0; i < casillas.length; i++){
                        if (casillas[i].innerText == pista.charAt(0)){
                            letraPista = casillas[i];
                            break;
                        }
                    }

                    cambiarPosiciones(letraPista, document.getElementById("block15"));
                    document.getElementById("block15").classList.add("intocable");
                    document.getElementById("block15").classList.add("aciertoPista");
                    arrayPistas[4] = null;
                    clickPista ++;
                    break;
                default:
                    console.log('No se ha podido dar pista');
            }
        }

    }

    function reseteaColores(){
        for (var i = 0; i < casillas.length; i++){
            casillas[i].classList.remove("acierto");
            casillas[i].classList.remove("letraRendirse");
		}
    }

    function reseteaAciertos(){
        acierto2 = false;
        acierto3 = false;
        acierto4 = false;
        acierto5 = false;
        acierto6 = false;
    }


    function reseteaPistas(){
        clickPista = 0;
        for (var i = 0; i < casillas.length; i++){
            casillas[i].classList.remove("intocable");
            casillas[i].classList.remove("aciertoPista");
		}
    }

    function resetearTodo(){
        reseteaColores();
        reseteaPistas();
        reseteaAciertos();
    }

    function comprobarVictoria(){
        if(acierto2 == true && acierto3 == true && acierto4 == true && acierto5 == true && acierto6 == true){
            document.getElementById("confetti-canvas").style.display = "block";
            document.getElementById("confetti-canvas").style.height = document.body.style.height;
            document.body.style.backgroundColor = "#A3FF99";
            startConfetti();
            
        }
    }

    function rendirse(){
        
        var fila2 = document.getElementsByClassName("b2");
        var fila3 = document.getElementsByClassName("b3");
        var fila4 = document.getElementsByClassName("b4");
        var fila5 = document.getElementsByClassName("b5");
        var fila6 = document.getElementsByClassName("b6");

        for(var i = 0 ; i < fila2.length; i++){
            if(fila2[i].classList.contains("aciertoPista") == false){
                fila2[i].classList.add("letraRendirse");
                fila2[i].innerText = palabra2.charAt(i);
            }
        }

        for(var i = 0 ; i < fila3.length; i++){
            if(fila3[i].classList.contains("aciertoPista") == false){
                fila3[i].classList.add("letraRendirse");
                fila3[i].innerText = palabra3.charAt(i);
            }
        }

        for(var i = 0 ; i < fila4.length; i++){
            if(fila4[i].classList.contains("aciertoPista") == false){
                fila4[i].classList.add("letraRendirse");
                fila4[i].innerText = palabra4.charAt(i);
            }
        }

        for(var i = 0 ; i < fila5.length; i++){
            if(fila5[i].classList.contains("aciertoPista") == false){
                fila5[i].classList.add("letraRendirse");
                fila5[i].innerText = palabra5.charAt(i);
            }
        }

        for(var i = 0 ; i < fila6.length; i++){
            if(fila6[i].classList.contains("aciertoPista") == false){
                fila6[i].classList.add("letraRendirse");
                fila6[i].innerText = palabra6.charAt(i);
            }
        }


    }
 