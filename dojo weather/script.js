var cookiestime = document.getElementById('test')
var test = document.querySelectorAll('h2')
console.log(test)

var celsArray = [];

for(var x = 0; x < test.length; x++) {
    celsArray.push(test[x].innerText)
}

console.log(celsArray)

function changeTemp(e) {
    console.log(e)
    console.log('it worked')
}

function removecookies() {
    console.log(cookiestime)
    cookiestime.remove()
}

function tempChange(element) {
    console.log(element.value)
    if(element.value == '°C') {
        console.log('its celsius')
        for(var x = 0; x <test.length;x++) {
            test[x].innerText = celsArray[x];
        }
    }
    else {
        console.log('its fahrenheit')
        for(var x = 0; x <test.length;x++) {
            var cels = test[x].innerText
            cels = cels.slice(0,-1)//takes away the degree signal
            test[x].innerText = `${changeToFahr(cels)}°`;
        }
    }
}

function round(num) {
    var decimal = num % 1;
    if(decimal >= .50) {
        num++;
    }
    num = num - decimal;
    return num;
}

function changeToFahr(value) {
    var fahr = (value * (9/5) + 32)
    fahr = round(fahr);
    return fahr;
}

function changeToCels(value) { 
    var cels = (value - 32) * (5/9);
    cels = round(cels);
    return cels;
} // Decided not to use this because I realized that when I use the both change to cels/fahr more then once If my "roundup" function could create a different number when switching back and forth.. so I decided to make a copy of the celsius numbers in the beginning so that I would only have to use the fahrenheit if my celsius numbers were to switch

changeToFahr(0);

