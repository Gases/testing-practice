function analyzeArray(array) {
  if (array.length === 0) {
    return {
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    };
  }

  const avg = () => {
    let counter = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      counter += array[i];
    }
    if (counter % array.length === 0) return counter / array.length;
    return parseFloat((counter / array.length).toFixed(3));
  };

  return {
    average: avg(),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = analyzeArray;
