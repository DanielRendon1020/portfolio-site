function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item)
    });
    return images;
  }
  
 export const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

 //Source: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack