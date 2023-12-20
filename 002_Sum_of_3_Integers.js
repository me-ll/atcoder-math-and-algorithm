function Main(input) {
	input = (input.split("\n"))[0].split(' ');
  console.log(parseInt(input[0], 10) + parseInt(input[1], 10) + parseInt(input[2], 10))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));