const main = arg => {
    const input = arg.trim().split("\n");
    const numbers = input[1].split(" ").map(n=>parseInt(n));

    let result = 0;
    for (const n of numbers) {
        result += n;
    }
    console.log(result % 100);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  