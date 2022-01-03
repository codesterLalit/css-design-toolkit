// method 1
// clamp(min, height in vh, max)

var cmdInput = process.argv;

let heightCalc = (height)=>{
    let minHeight = height/2;
    let maxHeight = height;
    let heightInVh = (height/1024)*100;
    let cssString = `clamp(${minHeight}px, ${heightInVh}vh, ${maxHeight}px)`;
    return cssString;
}

let result = heightCalc(cmdInput[2]);
console.log(result);