export const deleteItemFromArray = (id,array) => {
    let index = -1;
    let tempArray = [...array];
    console.log(tempArray)
    for (let i in tempArray) {
      if (tempArray[i].id === id) {
        index = i;
        console.log(tempArray[i])
      }
    }
    if (index >= 0) {
      tempArray.splice(index, 1);
    }
    return tempArray;
};