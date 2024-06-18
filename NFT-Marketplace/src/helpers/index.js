export const chopArray = (array, sizeOfNewArray) =>{
    let arr = Array.from(array)
    let deleteCount = arr.length - sizeOfNewArray
    arr.splice(sizeOfNewArray, deleteCount)
    return arr
}

export const getImage = (name, folderName) =>{
    return new URL(`../assets/${folderName}/${name}`, import.meta.url).href
}