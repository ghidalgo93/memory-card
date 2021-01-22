// Fisher-Yates Shuffle, https://bost.ocks.org/mike/shuffle/
const shuffle = (array) => {
  const arrayCpy = [...array];
  let m = arrayCpy.length;
  let t;
  let i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = arrayCpy[m];
    arrayCpy[m] = arrayCpy[i];
    arrayCpy[i] = t;
  }
  return arrayCpy;
};

export { shuffle };
