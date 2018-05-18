console.clear();
function dreEncode(input) {
    let drem=[];
    for (let index = 0; index < input.split('').length; index++) {
        const element = input.split('')[index];
        let base = element.charCodeAt(0);
        let raw = base*Math.ceil(Math.abs(new Date("1/1/1970").getTime() - new Date().getTime()) / (1000 * 3600 * 24));
        let pdremChar = raw;
        let dremChar = pdremChar.toString(16);
        drem[drem.length]=dremChar;
    }
    return drem.join('.');
}

function dreDecode(input) {
    let drem = [];
    for (let index = 0; index < input.split('.').length; index++) {
        const element = input.split('.')[index];
        let raw = parseInt(element,16);
        let base = raw/Math.ceil(Math.abs(new Date("1/1/1970").getTime() - new Date().getTime()) / (1000 * 3600 * 24));
        let pdremChar = base;
        let dremChar = pdremChar;
        drem[drem.length] = String.fromCharCode(dremChar);
    }
    return drem.join('');
}

