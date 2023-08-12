
let display = document.getElementById('display');
//let buttons = document.getElementById('button');
let buttons = document.querySelectorAll('button');

let string = "";
let array = Array.from(buttons);

array.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            display.value=string
        }

        string += e.target.innerHTML;
        display.value = string;
    })
})
