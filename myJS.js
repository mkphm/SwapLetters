

/* document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("swap").disabled = true;
}) */

let data = [];
function addItems() {
    
    for (var i = 0; i < 3; i++) {
        let itemList = data.push(prompt("Please enter a word"));
    }
    
    let list = document.getElementById("list");

    data.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
}


function hideDiv1() {
    var x = document.getElementById("myDiv1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function swapItem() {
    var data2 = data.map(function(oneWord){return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length -
        1) + oneWord.charAt(0);});

    let list = document.getElementById("list2");

    data2.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
    })
}

