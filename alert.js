function convertText(string) {
  let tmpArr = string.split("\n");
  tmpArr = tmpArr.map((el) => {
    let temp = "";
    const l = el.length;
    const ref = "banana";
    for (let i = 0, b = 0; i < l; i++, b++) {
      if (el[i] === " ") {
        temp += " ";
        b = 0;
      }
      temp += ref[b % ref.length];
    }
    return temp;
  });

  return tmpArr.join("\n");
}

document.querySelector("body").style.backgroundColor = "black";

const nodes = document.querySelectorAll("a");
nodes.forEach((a) => (a.innerText = convertText(a.innerText)));
nodes.forEach((a) => (a.style = "color:yellow"));

const nodes2 = document.querySelectorAll("p");
nodes2.forEach((a) => (a.innerText = convertText(a.innerText)));
nodes2.forEach((a) => (a.style = "color:yellow"));

const nodes3 = document.querySelectorAll("h1");
nodes3.forEach((a) => (a.innerText = convertText(a.innerText)));
nodes3.forEach((a) => (a.style = "color:yellow"));

const imageNodes = document.querySelectorAll("img");

imageNodes.forEach((el) => {
  // el.setAttribute('src', 'https://media.cnn.com/api/v1/images/stellar/prod/120604032828-fresh-ripe-bananas.jpg?q=x_0,y_106,h_2019,w_3590,c_crop/h_720,w_1280');
  //el.style.backgroundImage("url('https://media.cnn.com/api/v1/images/stellar/prod/120604032828-fresh-ripe-bananas.jpg?q=x_0,y_106,h_2019,w_3590,c_crop/h_720,w_1280')");
});
