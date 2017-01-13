const greet = () => {
  return "Hello World!";
}

module.exports = {
  PHI: 1.618,
  explain: () => {
    console.log(greet() + "(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
  },
}
