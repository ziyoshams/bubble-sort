const swapCalls = {}
function bubbleSort(array) { 
    let swapCounter 
    while(swapCounter !== 0){     
        swapCounter = 0
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i+1] ) {
                let swappedVal = array[i]
                array[i] = array[i+1]
                array[i+1] = swappedVal
                swapCounter++
            }
        }
    }
        return array 
}

