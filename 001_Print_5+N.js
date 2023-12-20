function Main(input) {
	input = input.split("\n");
  const apple = 5;
  console.log(apple + parseInt(input[0], 10))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));