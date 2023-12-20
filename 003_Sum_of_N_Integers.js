function Main(input) {
	const lines = input.split("\n");
	const numbers = lines[1].split(' ');
	
	let result = 0;
    for (const v of numbers) {
        result += parseInt(v, 10);
    }
    console.log(result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));