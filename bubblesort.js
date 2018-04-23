Array.prototype.bubbleSort = function(callback) {
  let swapCounter;
  if (callback) {
    while (swapCounter !== 0) {
      swapCounter = 0;
      for (let i = 0; i < this.length - 1; i++) {
        if (callback(this[i], this[i + 1]) === 1) {
          let swappedVal = this[i];
          this[i] = this[i + 1];
          this[i + 1] = swappedVal;
          swapCounter++;
        }
      }
    }
  } else {
    while (swapCounter !== 0) {
      swapCounter = 0;
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] > this[i + 1]) {
          let swappedVal = this[i];
          this[i] = this[i + 1];
          this[i + 1] = swappedVal;
          swapCounter++;
        }
      } 
    }
  }
  return this;
};
