function piglatin(array) {
  return _.map(array, function (item) {
    return `${item}-ay`;
  });
}