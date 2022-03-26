var listaCompras = [[], [], [], [], [], []];

function supermercado(){
    while(true){

        let resp = prompt('Deseja adicionar um ítem de compra à lista? S/N ');
        resp = resp.toUpperCase();
        console.log(resp);

        if(resp == 'S'){

            let item = prompt('Qual comida deseja inserir? ');
            let cat = prompt('Em qual categoria essa comida se encaixa? ');
            cat = cat.toUpperCase();

            if(cat == 'FRUTAS'){
                listaCompras[0].push(item);
            }else if(cat == 'VEGETAIS'){
                listaCompras[1].push(item);
            }else if(cat == 'LATICÍNIOS'){
                listaCompras[2].push(item);
            }else if(cat == 'BEBIDAS'){
               listaCompras[3].push(item);     
            }else if(cat == 'DOCES'){
                listaCompras[4].push(item); 
            }else if(cat == 'CONGELADOS'){
                listaCompras[5].push(item); 
            }    
        }else{
            console.log('Obrigado, volte sempre!');
            break;
        }

    }

    console.log('lista de compras:');
   
    console.log('FRUTAS: ' + listaCompras[0]);
    console.log('VEGETAIS: ' + listaCompras[1]);
    console.log('LATICÍNIOS: ' + listaCompras[2]);
    console.log('BEBIDAS: ' + listaCompras[3]);
    console.log('DOCES: ' + listaCompras[4]);
    console.log('CONGELADOS: ' + listaCompras[5]);

}






