const main = arg => {
    const input = arg.trim().split("\n");
    const numbers = input[0].split(" ").map(n=>parseInt(n));

    let result = 1;
    for (const n of numbers) {
      result *= n;
    }
    console.log(result);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  