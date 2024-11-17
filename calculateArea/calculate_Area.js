let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;

  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

}

let p1;
let p2;
let p3;

function groceryTracker() {
    p1 = parseFloat(document.getElementById('price1').value);
    p2 = parseFloat(document.getElementById('price2').value);
    p3 = parseFloat(document.getElementById('price3').value);

    let total = p1 + p2 + p3;

    document.getElementById('summation').innerText = `total sum is: ${total}`;

}