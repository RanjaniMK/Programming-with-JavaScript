//YTD

// Building a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    
    let message = "%c" + txt;
    let style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message,style)


    
}

// Building another console log message generator
function celebrateStyler(reason) {
     let fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log('%c  Happy Birthday', fontStyle);
    } else if (reason == "champions") {
        console.log('%c Congrats on the title!', fontStyle);

    } else {
        consoleStyler();
    }
}

// Running both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
celebrateStyler('birthday')

// Inserting a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
    
}
// Invoking styleAndCelebrate

styleAndCelebrate ('ef7c8e','fae8e0', '30px','You made it!', 'champions')
