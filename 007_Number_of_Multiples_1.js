const main = arg => {
    const [x, y, z] = arg.trim().split(" ").map(Number);
    
    let count = 0;
    for (let i = 1; i <= x; i++) {
        if (i % y === 0 || i % z === 0) {
            count++;
        }
    }
    console.log(count);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  