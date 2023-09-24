const myEach = (collection, callback) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (const key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
};

const myMap = (collection, callback) => {
  const newArr = [];
  myEach(collection, (e) => {
    newArr.push(callback(e));
  });
  return newArr;
};

const myReduce = (collection, callback, acc) => {
  let newAcc = acc;
  myEach(collection, (e) => {
    if (newAcc === undefined) {
      newAcc = e;
    } else {
      newAcc = callback(newAcc, e);
    }
  });
  return newAcc;
};

const myFind = (collection, predicate) => {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
};

const myFilter = (collection, predicate) => {
  const newArr = [];
  myEach(collection, (e) => {
    if (predicate(e)) {
      newArr.push(e);
    }
  });
  return newArr;
};

const mySize = (collection) => {
  let count = 0;
  myEach(collection, () => {
    count++;
  });
  return count;
};

const myFirst = (array, n) => {
  if (n === undefined) {
    return array[0];
  }
  const newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

const myLast = (array, n) => {
  if (n === undefined) {
    return array[array.length - 1];
  }
  const newArr = [];
  for (let i = array.length - n; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

const mySortBy = (array, callback) => {
  const newArr = [...array];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (callback(newArr[i]) > callback(newArr[j])) {
        const temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr;
};

const myFlatten = (array, [shallow], newArr = []) => {
  if (shallow) {
    return newArr.concat.apply([], array);
  }
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      myFlatten(array[i], false, newArr);
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

const myKeys = (object) => {
  const newArr = [];
  for (const key in object) {
    newArr.push(key);
  }
  return newArr;
};

const myValues = (object) => {
  const newArr = [];
  for (const key in object) {
    newArr.push(object[key]);
  }
  return newArr;
};
