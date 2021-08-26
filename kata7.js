let arrayTest = [8, 2 , 3, 4, 5, 12]


function newForEach(array, callback){
    
    for(let indice = 0; indice < array.length; indice++){
        let atual = array[indice]
        callback(atual, indice, array)
    }

}

function newFill(array, value, inicio, fim){
    if (inicio === undefined){
        inicio = 0
    }
    if (fim === undefined){
        fim = array.length
    }
    let indice = inicio

    for(indice; indice < fim; indice++){
        array[indice] = value
    }
    return array
}

function newMap(array, callback){
    output = []
    for(let indice = 0; indice < array.length; indice++){
        output.push(callback(array[indice]))    
    }
    return output

}

function newSome(array, callback){

    for(let indice = 0; indice < array.length; indice++){
        if(callback(array[indice])){
            return true
        }
         
    }
    return false

}