export const chopArray = (array, sizeOfNewArray) => {
  const arr = Array.from(array);
  const deleteCount = arr.length - sizeOfNewArray;
  arr.splice(sizeOfNewArray, deleteCount);
  
  return arr;
};

export const getImage = (name, folderName = '') => {
  return new URL(`../assets/${folderName}/${name}`, import.meta.url).href;
};
