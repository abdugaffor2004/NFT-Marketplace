export const chopArray = (array, sizeOfNewArray) =>{
    let arr = Array.from(array)
    let deleteCount = arr.length - sizeOfNewArray
    arr.splice(sizeOfNewArray, deleteCount)
    return arr
}