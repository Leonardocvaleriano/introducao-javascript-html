
       
        function sorteia(){     

            return Math.round(Math.random() * 10)            
            }
      
        function sorteiaNumero(quantidade){                  
                                                                
            var segredos = []   
            numero = 1 
            while(numero <= quantidade) {
    
            var numeroAleatorio = sorteia();
            var achou = false; 
    
            for(var posicao = 0; posicao < segredos.length ; posicao++){          
                if (segredos[posicao] == numeroAleatorio) {
                achou = true;
                break;
                }
    
            }
    
                if (achou == false) {
    
                    segredos.push(numeroAleatorio);
                    numero++
                    }
            } 
    
                  return segredos ;           
            }
    
    
            var segredos = sorteiaNumero(3);
            console.log(segredos)
            var input = document.querySelector("input");
            
    

        function verificacao(){
        
            achou = false; 
            for (var posicao = 0; posicao < segredos.length; posicao++) {
                if (input.value == segredos[posicao]) {
                achou = true;    
                alert("------------------- PARABÉNS, você acertou !! -------------------  "+ 
                "\n\n Clique em jogar novamente para reiniciar...");
                break;
            }  
    
            } if (achou == false) {
                 alert("Infelizmente você errou, tente novamente...");
                 input.focus();
           }
           
           input.value = ""
            }      
    
    
         var button = document.querySelector("button");
         button.onclick = verificacao;
         input.focus();
    
        var btn = document.querySelector("#refresh");
        btn.addEventListener("click", function() {
        
        location.reload();
        });

        