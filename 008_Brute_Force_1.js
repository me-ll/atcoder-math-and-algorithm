const main = arg => {
    const [x, y] = arg.trim().split(" ").map(Number);
    
    let count = 0;
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= x; j++ ) {
        
        const isLess = (i + j) <= y;
            if (isLess) {
                count++;
            }
        }
    }
    console.log(count)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  