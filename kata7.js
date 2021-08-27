let arrayTest = [8, 2 , 3, 4, 5, 12]
let arrayTest2 = [11,12,13] 
function isBiggerThan10(element, index, array) {
    return element > 10;
  }

function newForEach(array, callback){
    
    for(let indice = 0; indice < array.length; indice++){
        let atual = array[indice]
        callback(atual, indice, array)
    }

}

function newFill(array, value, inicio=0, fim=array.length){
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

function newFind(array, callback){
    
    for(let indice = 0; indice < array.length; indice++){
        if(callback(array[indice])){
            return array[indice]
        }
         
    }
    return 
}

function newFindIndex(array, callback){
    
    for(let indice = 0; indice < array.length; indice++){
        if(callback(array[indice])){
            return indice
        }
    }
    return 
}

function newEvery(array, callback){

    for(let indice = 0; indice < array.length; indice++){
        if(!callback(array[indice])){
            return false
        }
         
    }
    return true

}

function newFilter(array, callback){
    output = []
    for(let indice = 0; indice < array.length; indice++){
       if (callback(array[indice])){
           output.push(array[indice])
       }   
    }
    return output

}

function newConcat(){
    output = []
    for(let indice = 0; indice < arguments.length; indice++){
           output.push(...arguments[indice])  
    }
    return output 
}
function newIncludes(array, value, indice = 0) {
    for(let indice = 0; indice < array.length; indice++){
        if(value === array[indice]){
            return true
        }
    }
    return 
}

function newIndexOf(array, value){
    
    for(let indice = 0; indice < array.length; indice++){
        if(value === array[indice]){
            return indice
        }
    }
    return -1
}

function newJoin(array, separador=",") {
    let output = []
    let outputString = ""
    for (let indice = 0; indice<array.length; indice++){
        if(indice<array.length-1){
        output.push(array[indice] + separador)
        }
        else{
            output.push(array[indice])
        }
    }
    for(let indice = 0 ; indice<output.length; indice++){
        outputString += output[indice] 
    }
    
    return outputString
}