list_of_fonts = [64,48,32,72,24,20,80,18,16];
// First Method
fontCalc1 = (fontList)=>{
    result = fontList.map((font)=>{
        let minFont = font/2;
        let maxFont =  font;
        let fontInPx = font * 0.1;
        let fontInVw = ((font - fontInPx)/1440) * 100;
        let cssString = `${font} = clamp(${minFont}px, calc(${fontInPx.toFixed(3)}px + ${fontInVw.toFixed(3)}vw), ${maxFont}px)`;
        console.log(cssString);
        return cssString;
    })
    return result;
}

// fontCalc(list_of_fonts);

// Second method
fontCalc2 = (fontList)=>{
    result = fontList.map((font)=>{
        let minFont = font*(2/3);
        let maxFont =  font;
        let fullWidth  = 100;
        let minScreenSize = 900;
        let maxScreenSize = 1440;
        let cssString = `${font} = calc(${minFont.toFixed(3)}px + (${maxFont} - ${minFont.toFixed(3)})* (${fullWidth}vw - ${minScreenSize}px) / (${maxScreenSize} - ${minScreenSize}))`;
        console.log(cssString);
        return cssString;
    })
    return result;
}


// fontCalc1(list_of_fonts);

// singleFont

singleCalc = (font)=>{
    let minFont = font*(2/3);
    let maxFont =  font;
    let fullWidth  = 100;
    let minScreenSize = 900;
    let maxScreenSize = 1440;
    let cssString = `${font} = calc(${minFont.toFixed(3)}px + (${maxFont} - ${minFont.toFixed(3)})* (${fullWidth}vw - ${minScreenSize}px) / (${maxScreenSize} - ${minScreenSize}))`;
    console.log(cssString);
    return cssString;
}
var arguments = process.argv;
singleCalc(arguments[2]);