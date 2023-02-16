const node = document.querySelectorAll("p");
console.log(node.values);

let tmpArray = []
let tmp = document.querySelectorAll("a").forEach((e)=>tmpArray.push(e))

function convertText(string){
    let countBananas = string.length/7;
    let stringReturn = '';
    for (let i=0; i<countBananas; i++){
        stringReturn += 'bananas';
    };
    return stringReturn;
}


1. query selector all 

'asdfjlaksdf<html>dfasdf</html>'

<a></a>
