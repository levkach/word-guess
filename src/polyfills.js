// Polyfills for usefull methods used in arrays
Object.randInt = function (low, high, array, n = 0) {
  if (array) {
    let res = []
    for (let i = 0; i < n; i++) {
      res.push(low + Math.floor(Math.random() * high))
    }
    return res
  }
  return low + Math.floor(Math.random() * high)
}

// Polyfill to randomly get el of the array
Array.prototype.getRandomEl = function () {
  const index = Object.randInt(0, this.length)
  return this[index];
}

Array.prototype.popRandomEl = function () {
  const index = Object.randInt(0, this.length)
  this.swapInd(index, this.length - 1)
  return this.pop();
}

Array.prototype.swapInd = function (el1, el2) {
  const tmp = this[el1]
  this[el1] = this[el2]
  this[el2] = tmp
}

Array.prototype.randomSubArray = function () {
  const inds = Object.randInt(0, 2, true, this.length) // generate random array of 0/1 sizeof this array
  return this.filter(function (elem, ind) { return inds[ind] === 1 });
}

Array.prototype.subArrayOfNExclusiveWith = function (n, exclude) {

  if (n < 0 || this.length < n) {
    // console.error("Can't select " + n + " elements from array of length " + this.length);
    return [];
  }

  const indOfExclude = this.indexOf(exclude)

  if (indOfExclude == -1) {
    // console.error("Array " + this + " does not contain element " + exclude);
    return []
  }

  const inds = []

  while (inds.length !== n) {
    const randomIndex = Object.randInt(0, this.length)
    if (randomIndex !== indOfExclude && !inds.includes(randomIndex)) {
      inds.push(randomIndex)
    }
  }

  return this.filter(function (elem, ind) {
    if (inds.includes(ind))
      return elem
  })
}

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item)
}
