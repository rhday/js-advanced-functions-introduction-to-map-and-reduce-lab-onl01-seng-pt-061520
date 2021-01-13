///Map///
function mapToNegativize(src){
    let array = [] //Create a blank array to push the selected values into and return
    for (let i = 0; i < src.length; i++){
        array.push(-1 * src[i])
    }
    return array
}
function mapToNoChange(src){
    let array = [] //Create a blank array to push the selected values into and return
    for (let i = 0; i < src.length; i++){
        array.push(src[i])
    }
    return array
}
function mapToDouble(src){
    let array = [] //Create a blank array to push the selected values into and return
    for (let i = 0; i < src.length; i++){
        array.push(2 * src[i])
    }
    return array
}
function mapToSquare(src){
    let array = [] //Create a blank array to push the selected values into and return
    for (let i = 0; i < src.length; i++){
        array.push(src[i] * src[i])
    }
    return array
}

///Reduce///

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++){
        total = total + sourceArray[i]
    }
    return total
}
function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]) return false
    }
    return true
}
function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]) return true
    }
    return false
}