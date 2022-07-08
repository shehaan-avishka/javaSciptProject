function merge_array(array1,array2){
    const arr = array1.concat(array2);
    let uniqueArray = [...new Set(arr)];    
    console.log(uniqueArray);
}

const array1 = [1,2,3];
const array2 = [2,30,1];
merge_array(array1,array2);