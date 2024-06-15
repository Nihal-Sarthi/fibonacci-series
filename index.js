function fibonacciGenerator(n) {
  var series = [];
  if (n === 0) {
    return "Invalid Input";
  } else if (n === 1) {
    series = [0];
    return series;
  } else if (n === 2) {
    series = [0, 1];
    return series;
  } else {
    series = [0, 1];
    for (let num = 2; num < n; num++) {
      let lastIndex = series.length - 1;
      let secondLastIndex = series.length - 2;
      series.push(series[lastIndex] + series[secondLastIndex]);
    }
    return series;
  }
}
