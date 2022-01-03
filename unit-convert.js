import clipboard from 'clipboardy';
const cmdInput = process.argv;


let fromPxtoEm = (base, pixel)=>{
    let result = `${pixel/base}em`;
    clipboard.writeSync(result);
    return result;
}

if(cmdInput[2]=='px-em'){
    let base=cmdInput[3];
    console.log(fromPxtoEm(base, cmdInput[4]))
}