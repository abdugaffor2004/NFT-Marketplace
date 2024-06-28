export const getImage = (name, folderName = '') => {
  return new URL(`../assets/${folderName}/${name}`, import.meta.url).href;
};
