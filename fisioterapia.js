    let documento = prompt("Pon el tipo de documento y el numero de identificacion")    
        document.write(documento)

    let  respuesta = prompt("¿de que forma fue la visita? \n 1: presencial \n 2: virtual")
    
    switch(respuesta) {
        
        // Visita presencial
        
        case "1":
            
            document.write("<br><br> Se realiza visita desde el área con el objetivo de hacer seguimiento y la atención, se llega a la vivienda en donde ")
       
            let parentesco = prompt("¿Cuál es el parentesco del cuidador?");

            if (parentesco == "padre" || parentesco == "hermano" || parentesco == "abuelo" || parentesco == "primo" || parentesco == "vecino") {
                document.write(" atiende la visita su " + parentesco + " cuidador, ")
            } 
            
            else if (parentesco == "madre" || parentesco == "abuela" || parentesco == "hermana" || parentesco == "prima" || parentesco == "vecina") {
                document.write(" atiende la visita su " + parentesco + " cuidadora, ")
            } 
            
            else if(parentesco == "usuaria" || parentesco == "cuidadora"){
                document.write("atiende la " + parentesco +", ")
            } 
            
            else if(parentesco == "usuario" || parentesco == "cuidador"){
                document.write("atiende el " + parentesco +", ")
            }
        
            let  estado = prompt("¿como estaba el usuario? \n 1: bien \n 2: mal / regular") 
     
            switch(estado){
                    
                case "1":
                
                document.write(" refiriendo que se encuentran en estables condiciones de salud general")
                
                break;

                case "2":
                    
                    let why = prompt("¿Por que? sugerencia: empeza con un ''quien refiere que el usuario... '' ")    
                    document.write(why)
                    
                break;
                }
        
                function agregar(){
   
                    let porque = prompt("¿Deseas agregar algo mas? sino, dale aceptar")
                    
                    document.write(porque)
                
                }


                function movilidadarticular(){

                    let miembros = prompt("¿En que miembros? \n 1:Miembros superiores \n 2: Miembros inferiores \n 3: Miembro superiores e inferiores ")  
                
                   
                 
                switch(miembros){
                    case "1":
                        document.write("Se enfoca la atención en la realización de técnicas de movilidad articular en miembros superiores ")
                    break;
                
                    case "2":
                        document.write("Se enfoca la atención en técnicas de movilidad articular en miembros inferiores ")
                    break;
                
                    case "3":
                        document.write("Se enfoca la atención en técnicas de movilidad articular en miembros superiores e inferiores ")
                    break;
                }
                
                let what = prompt("¿Que se hizo o que se utilizó para hacer la movilidad? \n 1: elevacion de miembros superiores \n 2: botellas caseras \n 3: peso corporal")
                
                switch(what){
                    case "1":
                        document.write("para ello se realizaron elevaciones de miembros inferiores para mejorar retorno del censo y edema. ")
                    break;
                
                    case "2":
                        document.write("con la utilización de botellas caseras. ")
                    break;
                
                    case "3":
                        document.write("con la utilización de su propio peso corporal. ")
                    break;
                }
                           
                }
                
                
                function flexo(){

                    let  extencion = prompt("extencion de que \n 1: rodillas \n 2: caderas \n 3: rodillas y caderas \n 4: codo \n 5: hombro \n 6: codo y hombro  ")
                    
                        switch(extencion){
                            case "1":
                                document.write(". Se enfoca la atención en desplazamientos en flexo extensión de rodillas, ")
                            break;
                    
                            case "2":
                                document.write(". Se enfoca la atención en desplazamientos en flexo extensión de caderas, ")
                            break;
                    
                            case "3":
                                document.write(". Se enfoca la atención en desplazamientos en flexo extensión de rodillas y caderas, ")
                            break;
                    
                            case "4":
                                document.write(". Se enfoca la atención en desplazamientos en flexo extensión de codos, ")
                            break;
                    
                            case "5":
                                document.write(". se enfoca la atención en desplazamientos en flexo extensión de hombros, ")
                            break;
                    
                            case "6":
                                document.write(". Se enfoca la atención en desplazamientos en flexo extensión de codo y hombros, ")
                            break;
                        }
                       
                    }
                
                          
                function enfoquevisita1(){

                    let razon = prompt("¿Cuál fue el motivo de la visita?: \n 1: Revision de ejercicios dejados con anterioridad \n 2: movilidad articular \n 3: fortalecimiento de miembros \n 4: desplazamientos \n 5: felxo - extencion \n 6: abduccion y aduccion \n 7: rotaciones \n 8: técnicas de marcha \n 9: equilibrio y propiocepción \n 10: CORE \n 11: Control cabeza y cuello \n 12: tecnicas de masaje \n 13: posicion de tendon \n 14: asesoria para manejo de dolor")
                    
                    
                switch(razon){
                
                    case "1":
                        document.write(". Se enfoca la atención en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlos con frecuencia y la importancia de los mismos. ")
                    break;
                
                    case "2":
                        movilidadarticular()
                    break;
                
                    case "3":
                        document.write(". Se enfoca la atención en ejercicios para el fortalecimiento de miembros superiores e inferiores. ")
                    break;
                
                    case "4":
                        document.write(". Se enfoca la atención en desplazamientos en diferentes direcciones. ")
                    break;
                
                    case "5":
                        flexo()
                    break;
                
                    case "6":
                        document.write(". Se enfoca la atención en ejercicios de abducción y aducción. ")
                        agregar()
                    break;
                
                    case "7":
                        document.write(". La atención se enfoca en rotaciones. ")
                        agregar()
                    break;
                
                    case "8":
                        document.write(". La atención se enfoca en técnicas de marcha. ")
                        agregar()
                    break;
                
                    case "9":
                        document.write(". La atención se enfoca en técnicas de equilibrio y propiocepcion. ")
                        agregar()
                    break;
                
                    case "10":
                        document.write(". Se enfoca la atención en la realización de ejercicios CORE para fortalecimiento del tronco, miembros inferiores y para mejorar patrón de marcha del usuario. ")
                    break;
                
                    case "11":
                        document.write(". Se enfoca la atención en la realización de técnicas para control de cabeza y cuello mediante estimulaciones paravertebrales, como lo sería haciendo ejercicios de movilidad con cabeza, apuntando en diferentes direcciones sosteniendo 6 segundos. ")
                    break;
                
                    case "12":
                        document.write(". Se enfoca la atención en técnicas de masaje. ")
                    break;
                
                    case "13":
                        document.write(". La atencion se enfoca en la posición del tendon para modulación del tono muscular. ")
                    break;
                
                    case "14":
                        document.write(". Se enfoca la atención y la asesoría para manejo de dolor. ")
                    break;
                        }
                }

                function referencias(){
                    let  references = prompt("¿Dejaste indicaciones en el cuaderno planeador? \n 1: si  \n 2: no ")
                
                
                switch(references){
                    case "1":
                        document.write("Se dejan las indicaciones en el cuaderno planeador y se recuerdan los compromisos y dinámicas del programa. Se deja el usuario en estables condiciones  y se informa fecha de la próxima atención ")
                    break;
                
                    case "2":
                        document.write(" ")
                    break;
                    }       
                }
        
                function fecha(){
                    let  cita = prompt("Escribe la fecha de la proxima visita")
                    document.write(cita)
                }


                enfoquevisita1()
        

        let pregunta = prompt("¿La visita tuvo otro motivo? \n 1: si \n 2: no")
        
                if (pregunta == "1"){
                    
                function movilidadarticular2(){

                    let miembros = prompt("¿En que miembros? \n 1:Miembros superiores \n 2: Miembros inferiores \n 3: Miembro superiores e inferiores ")  

   
 
                switch(miembros){
                    case "1":
                        document.write(" La atención se enfoca además en la realización de técnicas de movilidad articular en miembros superiores ")
                    break;

                    case "2":
                        document.write(" La atención se enfoca además en técnicas de movilidad articular en miembros inferiores ")
                    break;

                    case "3":
                        document.write("La atención se enfoca tambien  en técnicas de movilidad articular en miembros superiores e inferiores ")
                    break;
                }
           
                let what = prompt("¿Que se hizo o que se utilizó para hacer la movilidad? \n 1: elevacion de miembros superiores \n 2: botellas caseras \n 3: peso corporal")

                switch(what){
                    case "1":
                        document.write("para ello se realizaron elevaciones de miembros inferiores para mejorar retorno del censo y edema. ")
                    break;

                    case "2":
                        document.write("con la utilización de botellas caseras. ")
                    break;

                    case "3":
                        document.write("con la utilización de su propio peso corporal. ")
                    break;
                }
           
           
           
            }
             
            
                function flexo2(){
    
                let  extencion = prompt("extencion de que \n 1: rodillas \n 2: caderas \n 3: rodillas y caderas \n 4: codo \n 5: hombro \n 6: codo y hombro  ")
                
                    switch(extencion){
                        case "1":
                            document.write(" La atención tambien se enfoca en desplazamientos en flexo extensión de rodillas. ")
                        break;
                
                        case "2":
                            document.write(" La atención tambien se enfoca en desplazamientos en flexo extensión de caderas. ")
                        break;
                
                        case "3":
                            document.write(" La atención tambien se enfoca en desplazamientos en flexo extensión de rodillas y caderas. ")
                        break;
                
                        case "4":
                            document.write(" La atención tambien se enfoca en desplazamientos en flexo extensión de codos. ")
                        break;
                
                        case "5":
                            document.write(" La atención tambien se enfoca en desplazamientos en flexo extensión de hombros. ")
                        break;
                
                        case "6":
                            document.write(" La atención tambien se enfoca en desplazamientos en flexo extensión de codo y hombros. ")
                        break;
                    }
                   
            }


                function enfoquevisita2(){

                    let razon = prompt("motivo de la visita #2:  \n 1: Revision de ejercicios dejados con anterioridad \n 2: movilidad articular \n 3: fortalecimiento de miembros \n 4: desplazamientos \n 5: felxo - extencion \n 6: abduccion y aduccion \n 7: rotaciones \n 8: técnicas de marcha \n 9: equilibrio y propiocepción \n 10: CORE \n 11: Control cabeza y cuello \n 12: tecnicas de masaje \n 13: posicion de tendon \n 14: asesoria para manejo de dolor")

                    switch(razon) {
                        
                        case "1":
                            document.write(" Tambien enfoca la atención en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlos con frecuencia y la importancia de los mismos. ")
                        break;
                    
                        case "2":
                            movilidadarticular2()
                        break;
                    
                        case "3":
                            document.write(" Tambien se enfoca la atención en ejercicios para el fortalecimiento de miembros superiores e inferiores. ")
                        break;
                    
                        case "4":
                            document.write(" Tambien se enfoca la atención en desplazamientos en diferentes direcciones. ")
                        break;
                    
                        case "5":
                            flexo2()
                        break;
                    
                        case "6":
                            document.write(" Tambien se enfoca la atención en ejercicios de abducción y aducción. ")
                            agregar()
                        break;
                    
                        case "7":
                            document.write(" Tambien se enfoca la atención en rotaciones. ")
                            agregar()
                        break;
                    
                        case "8":
                            document.write(" La atención tambien se enfoca en técnicas de marcha. ")
                            agregar()
                        break;
                    
                        case "9":
                            document.write(" La atención tambien se enfoca en técnicas de equilibrio y propiocepcion. ")
                            agregar()
                        break;
                    
                        case "10":
                            document.write(" Tambien se enfoca la atención en la realización de ejercicios CORE para fortalecimiento del tronco, miembros inferiores y para mejorar patrón de marcha del usuario. ")
                        break;
                    
                        case "11":
                            document.write(" Tambien se enfoca la atención en la realización de técnicas para control de cabeza y cuello mediante estimulaciones paravertebrales, como lo sería haciendo ejercicios de movilidad con cabeza, apuntando en diferentes direcciones sosteniendo 6 segundos. ")
                        break;
                    
                        case "12":
                            document.write(" Tambien se enfoca la atención en técnicas de masaje. ")
                        break;
                    
                        case "13":
                            document.write(" La atencion tambien se enfoca en la posición del tendon para modulación del tono muscular. ")
                        break;
                    
                        case "14":
                            document.write(" Tambien se enfoca la atención y la asesoría para manejo de dolor. ")
                        break;
                    }


            }
        
        
            enfoquevisita2()
            
            referencias()
            
            fecha()
            
            document.write(" se deja a usuario en estables condiciones de salud general.")


            } 
            
                else if(pregunta == "2"){
                    
                    referencias()
            
                    fecha()
                    
                    document.write(" se deja a usuario en estables condiciones de salud general.")
            }
    
            break;
            // Caso 2, visita virtual

            case "2":
                
            document.write("<br><br>Se realiza seguimiento telefónico con el objetivo de hacer seguimiento desde el área y reencuadre frente al inicio de las atenciones, se establece comunicación con acudiente del usuario, ")
            
            let estadoUsuario = prompt("¿Cómo se encontraba el usuario? \n 1: Bien \n 2: mal")
  

            switch(estadoUsuario){
            
                case "1":
                    
                    document.write(" quien indica que el usuario se ha encontrado en estables condiciones de salud general")
                
                 break;

                case "2":
                    
                    let razon = prompt("¿Por que? \n 1: problemas economicos \n 2: hospitalizacion \n 3: otro")
                
                switch(razon){

                    case "1":
                        
                        document.write(" quien refiere que se ha presentado dificultad para conseguir los alimentos y la situación económica es compleja")
                    
                    break;

                    case "2":
                        
                        document.write(" quien refiere que el usuario esta hospitalizado")
                    
                    break;
                    
                    case "3":
                        
                    let pq = prompt("Escribe la razon. SUGERENCIA: empieza con un ''quien refiere que el usuario... '' ")    
                    
                    document.write(pq)
                    
                    break;

                }
            }
            


            function ejercicios(){
                let practicas = prompt("¿Dejaste ejercicios para que el usuario realice? \n 1: si \n 2: no")
                
                
                switch(practicas){
                    case "1":
                        let cual = prompt("¿Cuales? \n 1: Ejercicios de movilidad articular \n 2: Ejercicios en miembros superiores \n 3: Ejercicios en miembros inferiores \n 4: Ejercicios de movilidad articular en miembros superiores \n 5: Ejercicios de movilidad articular en miembros inferiores \n 6: Ejercicios de movilidad articular en miembros superiores e inferiores")
                
                        switch(cual){
                            case "1":
                                document.write(". Se dejan ejercicios de movilidad articular. ")
                            break;
                
                            case "2":
                                document.write(". Se dejan ejercicios para miembros superiores. ")
                            break;
                
                            case "3":
                                document.write(". Se dejan ejercicios para miembros inferiores. ")
                            break;
                
                            case "4":
                                document.write(". Se dejan ejercicios de movilidad articular en miembros superiores. ")
                            break;
                
                            case "5":
                                document.write(". Se dejan ejercicios de movilidad articular en miembros inferiores. ")
                            break;
                
                            case "6":
                                document.write(". Se dejan ejercicios de movilidad articular en miembros superiores e inferiores. ")
                            break;
                        }
                
                        case "2":
                            document.write(" ")
                        break;
                
                    }
            }

            function tecnicas(){

                        let tecnics = prompt("¿El usuario ha practicado tecnicas para mejorar su condicion? \n 1: si  \n 2: no ")
                        
                        
                        
                        switch(tecnics){
                            case "1":
                                
                                let tipodetecnica = prompt("¿Cuáles tecnicas ha practicado el usuario? \n 1: movilidad articular \n 2: tecnicas de cambios de posición \n 3: ambas \n 4: reducir espasticidad" )
                        
                            switch(tipodetecnica){
                                
                                case "1":
                                    document.write(" Cuidador indica que se han aplicado las técnicas con enfoque en movilidad articular ")
                                break;
                        
                                case "2":
                                    document.write(" Cuidador indica que se han aplicado las técnicas con enfoque en cambios de posición ")
                                break;
                        
                                case "3":
                                    document.write(" Cuidador indica que se han aplicado técnicas con enfoque en movilidad articular y cambios de posición ")
                                break;
                        
                                case "4":
                                document.write(" Cuidador indica que han aplicado técnicas y ejercicios para reducir espasticidad")
                                break;
                            
                            }
                        
                            break;
                        
                        
                            case "2":
                                document.write(" Cuidador indica que el usuario no ha practicado técnicas de ningún tipo")
                            break;
                        
                        }
            }

            function indicaciones() {
                    
                    let indications = prompt("¿Dejaste indicaciones en el cuaderno planeador? \n 1: si  \n 2: no ")
                        
                switch(indications){
                    
                    case "1":
                        document.write(". Se dejan las indicaciones en el cuaderno planeador y se recuerdan los compromisos y dinámicas del programa. Se deja el usuario en estables condiciones y se informa la fecha de la próxima atención ")
                    break;

                    case "2":
                        document.write(" ")
                    break;

                    }
            }

            function fecha(){

                        let  cita = prompt("Escribe la fecha de la proxima visita")
                        document.write(cita)

            }

                let razon = prompt("motivo de la atencion: \n 1: indicaciones de las dinamicas del proyecto \n 2: continuacion de atenciones \n 3: condiciones de salud del usuario \n 4: Revision de ejercicios dejados con anterioridad")
            
            
                switch(razon){
                
                    case"1":
                        document.write(". La llamada se enfoca en brindar indicaciones frente a las dinámicas del proyecto, sobre la continuidad de las atenciones y la importancia de cumplir con los compromisos propuestos")
                    break;
                
                    case"2":
                        document.write(". La llamada se enfoca en informar sobre la continuidad de las atenciones") 
                    break;
                
                    case"3":
                        document.write(". Se enfoca la llamada en la revisión de las condiciones de salud del usuario y como está siendo su cuidado")
                    break;
                
                    case"4":
                        document.write(". Se enfoca la llamada en la indagación de los ejercicios dejados con anterioridad. Se le recuerda la importancia de ejecutarlos con frecuencia y la importancia de los mismos para evitar lesiones y dolores articulares")
                    break;
                    }
            
                let otraPregunta = prompt("¿La llamada tuvo otro motivo? \n 1: Si \n 2: No")

                if(otraPregunta == "1"){

                    let razon = prompt("Cuál es el otro motivo de la atencion \n 1: indicaciones de las dinamicas del proyecto \n 2: continuacion de atenciones \n 3: condiciones de salud del usuario \n 4: Revision de ejercicios dejados con anterioridad")


                    switch(razon){
                    
                        case"1":
                            document.write(". Tambien se enfoca la llamada en brindar indicaciones frente a las dinámicas del proyecto, sobre la continuidad de las atenciones y la importancia de cumplir con los compromisos propuestos")
                        break;
                    
                        case"2":
                            document.write(". Tambien se enfoca la llamada  en informar sobre la continuidad de las atenciones") 
                        break;
                    
                        case"3":
                            document.write(". Tambien se enfoca la llamada en la revisión de las condiciones de salud del usuario y como está siendo su cuidado")
                        break;
                    
                        case"4":
                            document.write(". Tambien se enfoca la llamada en la indagación de los ejercicios dejados con anterioridad. Se le recuerda la importancia de ejecutarlos con frecuencia y la importancia de los mismos para evitar lesiones y dolores articulares")
                        break;
                        }
                
                        ejercicios()
                        
                        tecnicas()
                        
                        indicaciones()
                        
                        fecha()
                
                        document.write(". Se lleva a cabo la atención virtual de activación bajo consentimiento de quien la recibe dado que el servicio de transporte para facilitar las atenciones presenciales inician en los primeros días de junio por lo anterior se deja constancia de estas sin firma del usuario y/o persona cuidando. ")
                
                }

                else{
                    
                    ejercicios()
                        
                    tecnicas()
                    
                    indicaciones()
                    
                    fecha()
            
                    document.write(". Se lleva a cabo la atención virtual de activación bajo consentimiento de quien la recibe dado que el servicio de transporte para facilitar las atenciones presenciales inician en los primeros días de junio por lo anterior se deja constancia de estas sin firma del usuario y/o persona cuidando. ")
                }


            break;
        
        } 

